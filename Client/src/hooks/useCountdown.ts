import { useState, useEffect } from "react";

export const useCountdown = (targetDate: Date) => {
  const [timeDiff, setTimeDiff] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeDiff(targetDate.getTime() - new Date().getTime()); // Decrement by 1 second but this will not be stopped even the rendering stopped

      if (timeDiff <= 0) {
        clearInterval(intervalId); // Should Stop the interval when countdown reaches zero but not working
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [timeDiff]);

  return timeDiff;
};
