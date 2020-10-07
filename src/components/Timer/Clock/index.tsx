import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div``;
const Time = styled.span``;

type ClockProps = {
  time: string;
};

const Clock: React.FC<ClockProps> = ({ time }) => {
  return (
    <Wrapper>
      <Time>{time}</Time>
    </Wrapper>
  );
};

Clock.propTypes = {
  time: PropTypes.string.isRequired,
};

export default Clock;
