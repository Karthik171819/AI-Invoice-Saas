import mongoose from "mongoose";
import Invoice from "../models/invoiceModel.js";
import { getAuth } from "@clerk/express";

const API_BASE = "http://localhost:4000";

function computeTotals(items = [], taxPercent = 0) {
  const safe = Array.isArray(items) ? items.filter(Boolean) : [];
  const subtotal = safe.reduce(
    (s, it) => s + Number(it.qty || 0) * Number(it.unitPrice || 0),
    0
  );
  const tax = (subtotal * Number(taxPercent || 0)) / 100;
  const total = subtotal + tax;
  return { subtotal, tax, total };
} //calculate subtotal, tax and total

//parse FormData items
function parseItemsField(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === "string") {
    try {
      return;
    } catch {
      return [];
    }
  }
  return val;
}

// check if string is Obj ID
function isObjectIdString(val) {
   return typeof val == "string" && /^[0-9a-fA-F]{24}$/.test(val); 
}