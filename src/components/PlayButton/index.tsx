import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  background-color: #ff4785;
  color: #fff;
  font-weight: bold;
`;

interface PlayButtonProps {
  onClick: (e: React.MouseEvent) => void;
}

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return <Button onClick={onClick}>Play</Button>;
};

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default PlayButton;
