import axios from "axios";
import { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";

const BiddingComponent = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/get")
      .then((res) => {
        setAuctions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {auctions.map((auction: any) => (
        <AuctionCard
          key={auction.id}
          startingPrice={auction.InitialPrice}
          initialDate={new Date(auction.Date)}
          itemName={auction.ItemName}
          itemDescription={auction.ItemDescription}
        />
      ))}
    </>
  );
};

export default BiddingComponent;
