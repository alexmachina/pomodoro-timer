import React from "react";

const Timer = ({ ms }) => {
  const mapMsToTimer = (ms) => {
    const totalSeconds = ms / 1000;
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const timer = `${minutes}:${remainingSeconds}`;
    return timer;
  };

  return <div>{mapMsToTimer(ms)}</div>;
};

export default Timer;
