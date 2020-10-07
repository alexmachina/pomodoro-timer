import { resetWarningCache } from "prop-types";
/* eslint-disable no-case-declarations */
import { useEffect, useReducer, useState } from "react";

const appendLeadingZero = (token: string) => {
  if (token.length === 1) {
    return `0${token}`;
  } else {
    return token;
  }
};

const parseMs = (time: string) => {
  const [minutes, seconds] = time.split(":").map((n) => Number(n));
  const totalSeconds = minutes * 60 + seconds;
  const ms = totalSeconds * 1000;
  return ms;
};

const parseTime = (ms: number) => {
  const totalSeconds = ms / 1000;

  const remainingMinutes = String(Math.floor(totalSeconds / 60));
  const remainingSeconds = String(totalSeconds % 60);

  const minutes = appendLeadingZero(remainingMinutes);
  const seconds = appendLeadingZero(remainingSeconds);

  return `${minutes}:${seconds}`;
};

interface ITimerState {
  initialTime: string;
  time: string;
  status: string;
  ms: number;
}

interface ITimer extends ITimerState {
  play: () => void;
  pause: () => void;
}

type IAction = {
  type: string;
  payload?: ITimerState;
};
const reducer = (state: ITimerState, action: IAction) => {
  switch (action.type) {
    case "decrement":
      const ms = state.ms - 1000;
      const time = parseTime(ms);
      return { ...state, ms, time };
    case "play":
      return { ...state, status: "running" };
    case "pause":
      return { ...state, status: "paused" };
    case "finish":
      return {
        ...state,
        status: "finished",
      };
    case "reset":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const useTimer = (initialTime: string): ITimer => {
  const initialState: ITimerState = {
    initialTime,
    time: initialTime,
    status: "idle",
    ms: parseMs(initialTime),
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [timerInterval, setTimerInterval] = useState<number | undefined>();

  /**
   * @summary Se o timerInterval não existe, seta um interval que diminui um segundo do timer
   */
  const startTimer = (): void => {
    if (!timerInterval) {
      const interval = setInterval(() => {
        dispatch({ type: "decrement" });
      }, 1000);

      setTimerInterval(interval);
    }
  };

  const stopTimer = () => {
    clearInterval(timerInterval);
    setTimerInterval(timerInterval);
  };

  // Inicia ou para o timer de acordo com o status
  useEffect(() => {
    if (state.status === "running") {
      startTimer();
    } else {
      stopTimer();
    }
  }, [state]);

  /**
   * @summary Quando o timer chega a zero, dispatch na action finish e reset
   */
  useEffect(() => {
    if (state.ms === 0) {
      dispatch({ type: "finish" });
      clearInterval(timerInterval);
      setTimerInterval(undefined);
      dispatch({ type: "reset", payload: initialState });
    }
  }, [state]);

  const play = () => {
    const playAction = { type: "play" };
    dispatch(playAction);
  };

  const pause = () => {
    const pauseAction = { type: "pause" };
    dispatch(pauseAction);
  };

  return { ...state, play, pause };
};

export default useTimer;
