import mongoose from "mongoose";

 export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://maheshkmahi20_db_user:invoice123@cluster0.npe81hg.mongodb.net/InvoiceAI');
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

