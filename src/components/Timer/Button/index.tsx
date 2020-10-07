import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: #ff4785;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 4px;
  width: 80px;

  &:hover {
    background-color: #ee2285;
  }
`;

interface PlayButtonProps {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const Button: React.FC<PlayButtonProps> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
