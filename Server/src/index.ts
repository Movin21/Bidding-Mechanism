import express from "express";
import cors from "cors";
import createRouter from "./api/create";
import { connectDB } from "./persistance/DbConnection";
const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use("/api/create", createRouter);

app.listen(3000, (): void => {
  console.log("Server started on port 3000");
});
