import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import Play from "./Play";
import "./index.css";

const App = () => {
  const initialMs = 0.05 * 60 * 1000;
  const [ms, setMs] = useState(initialMs);
  const [intervalId, setIntervalId] = useState();
  const pomodoroEnded = ms === 0;
  const stopTimer = () => {
    if (pomodoroEnded) {
      clearInterval(intervalId);
    }
  };

  const askNotificationPermision = () => {
    const { permission } = Notification;
    if (permission === "granted") {
      return;
    }

    if (permission !== "denied") {
      Notification.requestPermission();
    }
  };

  const notifyStop = () => {
    const permissionGranted = Notification.permission === "granted";

    if (permissionGranted && pomodoroEnded) {
      new Notification("VAI PARA VAI PARA");
    }
  };

  const onPlayClick = () => {
    const id = setInterval(() => setMs((ms) => ms - 1000), 1000);
    setIntervalId(id);
  };

  useEffect(stopTimer, [ms]);
  useEffect(notifyStop, [ms]);
  useEffect(askNotificationPermision, []);

  return (
    <div>
      <Timer ms={ms} />
      <Play onClick={onPlayClick} />
    </div>
  );
};

export default App;
