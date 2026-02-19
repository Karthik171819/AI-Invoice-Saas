import React, { useEffect } from "react";
import { aiInvoiceModelStyles } from "../assets/dummyStyles";
import GeminiIcon from "./GeminiIcon";
import AnimatedButton from "../assets/GenerateBtn/Gbtn";
import { useState, useEffect } from "react";

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

  return <div>AiInvoiceModel</div>;
};

export default AiInvoiceModel;
