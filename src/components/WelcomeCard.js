import React from "react";
import styled from "styled-components";
import BigIconsGrouped from "../icons/BigIconsGrouped";
import Title from "./Title";

const WelcomeCardDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 370px;
  height: 370px;
  border: none;
  background: #fff;
  box-shadow: 2px 2px 2px #00000029;
  margin: 110px 20px 50px 20px;
  padding: 45px 5px 0 5px;
`;

const StyledIconsGrouped = styled.span`
  position: absolute;
  top: -95px;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 8px;
`;

export default function WelcomeCard() {
  return (
    <WelcomeCardDiv>
      <StyledIconsGrouped>
        <BigIconsGrouped />
      </StyledIconsGrouped>
      <Title boldHeadline>VEGANIZE IT</Title>
      <StyledParagraph>
        Veganize every recipe by replacing animal-based ingredients with
        plant-based alternatives - easy, healthy, sustainable.
      </StyledParagraph>
    </WelcomeCardDiv>
  );
}
