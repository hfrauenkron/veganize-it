import React from "react";
import styled from "styled-components";
import BigIconsGrouped from "../icons/BigIconsGrouped";

const WelcomeCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  border: none;
  background: #fff;
  box-shadow: 2px 2px 2px #00000029;
`;

const StyledIconsGrouped = styled.span`
  position: absolute;
  top: -95px;
`;

export default function WelcomeCard() {
  return (
    <WelcomeCardDiv>
      <StyledIconsGrouped>
        <BigIconsGrouped />
      </StyledIconsGrouped>
    </WelcomeCardDiv>
  );
}
