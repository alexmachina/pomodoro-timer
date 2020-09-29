import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid #eee;
`;

const Title = styled.h2`
  margin-top: 0;
  font-size: 16px;
  color: #252525;
`;

const Controls = styled.div`
  display: flex;
`;

const AddButton = styled.div`
  background-color: transparent;
  color: #252525;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Title>Tasks</Title>
      <Controls>
        <AddButton>+</AddButton>
      </Controls>
    </Wrapper>
  );
};

export default Header;
