import React, { useEffect } from "react";
import Clock from "./Clock";
import Button from "./Button";
import useTimer from "./useTimer";

const Timer: React.FC<null> = () => {
  const { time, play, pause, status } = useTimer("00:05");

  useEffect(() => {
    if (status === "finished") {
      alert("YAHEI");
    }
  }, [status]);

  return (
    <div>
      <Clock time={time} />
      {status !== "running" && <Button onClick={play}>Play</Button>}
      {status === "running" && <Button onClick={pause}>Pause</Button>}
    </div>
  );
};

export default Timer;
