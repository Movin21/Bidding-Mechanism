import express from "express";
import cors from "cors";
import createRouter from "./api/create";
import getRouter from "./api/get";
import { connectDB } from "./persistance/DbConnection";
const app = express();

app.use(express.json());

app.use(cors());

connectDB();

app.use("/api/get", getRouter);
app.use("/api/create", createRouter);

app.listen(8000, () => console.log("Server is listening on port 8000."));
