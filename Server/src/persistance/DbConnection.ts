import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_DATABASE) {
      throw new Error("Database Connction String is Missing..");
    }
    await mongoose.connect(process.env.MONGODB_DATABASE);
    console.log("Connected to Database....");
  } catch (err) {
    console.log(err);
  }
};