import React from "react";

interface PlayPropTypes {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Play: React.FC<PlayPropTypes> = ({ onClick }) => {
  return <button onClick={onClick}>Play</button>;
};

export default Play;
