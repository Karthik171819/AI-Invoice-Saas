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
      </div>
    </div>
  );
};

export default AiInvoiceModel;
