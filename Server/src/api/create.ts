import express, { Request, Response } from "express";


const createRouter = express.Router();

createRouter.route("/").post(async (req: Request, res: Response) => {
  res.status(201).send("created");
});
export default createRouter;
