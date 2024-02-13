import mongoose from "mongoose";

const auctionSchema = new mongoose.Schema({
  ItemName: {
    type: String,
    required: true,
  },
  ItemDescription: {
    type: String,
    required: true,
  },
  InitialPrice: {
    type: Number,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
});

const Auction = mongoose.model("Auction", auctionSchema);
export default Auction;
