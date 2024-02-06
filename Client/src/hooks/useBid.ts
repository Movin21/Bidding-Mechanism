import { useCountdown } from "@/hooks/useCountdown";
import { useState } from "react";

export const useBid = (initialPrice: number, endDate: Date) => {
  const startingPrice = initialPrice;
  const [currentHighestBid, setCurrentHighestBid] = useState(0);
  const [enteredValue, setEnteredValue] = useState(0);
  let countDown = useCountdown(endDate); //Timer
  if (countDown < 0) {
    countDown = 0;
  }
  const biddingMechanism = (e: SubmitEvent) => {
    e.preventDefault();
    if (enteredValue > currentHighestBid && enteredValue > startingPrice) {
      setCurrentHighestBid(enteredValue);
    } else {
      alert("Enter a Valid bid");
    }
  };
  return {
    startingPrice,
    currentHighestBid,
    countDown,
    biddingMechanism,
    setEnteredValue,
  };
};
