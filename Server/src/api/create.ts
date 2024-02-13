import express, { Request, Response } from "express";
import Auction from "../persistance/auctionModel";

const createRouter = express.Router();

createRouter.route("/").post(async (req: Request, res: Response) => {
  try {
    await Auction.create(req.body);
    return res.status(200).json({ msgs: "Auction created successfully" });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
export default createRouter;
