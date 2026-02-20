import React, { useEffect } from "react";
import { aiInvoiceModelStyles } from "../assets/dummyStyles";
import GeminiIcon from "./GeminiIcon";
import AnimatedButton from "../assets/GenerateBtn/Gbtn";
import { useState } from "react";

const AiInvoiceModel = ({ open, onClose, onGenerate, initialText = "" }) => {
  const [text, setText] = useState(initialText || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setText(initialText || "");
    setError("");
    setLoading(false);
  }, [open, initialText]);

  //if its not open, return null to not render anything
  if (!open) return null;

  async function handleGenerateClick() {
    setError("");
    const raw = (text || "").trim();
    if (!raw) {
      setError("Please enter invoice text to generate from AI.");
      return;
    }

    try {
      setLoading(true);
      const maybePromise = onGenerate && onGenerate(raw);
      if (maybePromise && typeof maybePromise.then === "function") {
        await maybePromise;
      }
    } catch (err) {
      console.error("Error during AI generation:", err);
      const msg =
        err &&
        (err.message || (typeof err === "string" ? err : JSON.stringify(err)));
      setError(msg || "An error occurred during AI generation. Try again");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={aiInvoiceModelStyles.overlay}>
      <div
        className={aiInvoiceModelStyles.backdrop}
        onClick={() => onClose && onClose()}
      ></div>

      <div className={aiInvoiceModelStyles.modal}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className={aiInvoiceModelStyles.title}>
              <GeminiIcon className=" w-6 h-6 group-hover:scale-110 transition-transform flex-none" />
              Create Invoice with AI.
            </h3>
            <p className={aiInvoiceModelStyles.description}>
              Paste any text that contains invoice details like client, items,
              qty, prices and we'll attempt to extract an invoice
            </p>
          </div>
          <button
            onClick={() => onClose && onClose()}
            className={aiInvoiceModelStyles.closeButton}
          >
            ✕
          </button>
        </div>
        <div className="mt-4">
          <label className={aiInvoiceModelStyles.label}>
            Paste Invoice Text
          </label>
          <textarea vlaue={text} onChange={(e) => setText(e.target.value)}
            placeholder=
            {`e.g. Client: John Doe, Item: Widget, Qty: 2, Price: $10 each`}
            rows={8}
            className={aiInvoiceModelStyles.textarea}
            >
          </textarea>
        </div>
        {error && (
          <div className={aiInvoiceModelStyles.error} role="alert">
            {String(error)
              .split("\n")
              .map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            {(/quota|exhausted|resource_exhausted/i.test(String(error)) && (
              <div style={{ marginTop: 8, fontSize: 13, color: "#374151" }}>
                Tip: AI is temporarily unavailable (quota). Try again in a few
                minutes, or create the invoice manually.
              </div>
            )) ||
              null}
          </div>
        )}
        <div className={aiInvoiceModelStyles.actions}>
          <AnimatedButton
            onClick={handleGenerateClick}
            isLoading={loading}
            disabled={loading}
            label="Generate"
          />
        </div>
      </div>
    </div>
  );
};

export default AiInvoiceModel;
