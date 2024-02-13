import express, { Request, Response } from "express";
import Auction from "../persistance/auctionModel";

const getRouter = express.Router();

getRouter.route("/").get(async (req: Request, res: Response) => {
  try {
    const auctions = await Auction.find();
    return res.status(200).json(auctions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
export default getRouter;
