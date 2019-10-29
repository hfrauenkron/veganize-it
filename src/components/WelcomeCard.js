import React from "react";
import styled, { keyframes } from "styled-components";
import Title from "./Title";
import AlmondIcon from "../icons/AlmondIcon";
import TomatoIcon from "../icons/TomatoIcon";
import CashewIcon from "../icons/CashewIcon";

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

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 8px;
  font-size: 20px;
`;

const swing = keyframes`
  from { transform: rotate(30deg);}
    to { transform: rotate(-10deg);}
`;

const swingTomato = keyframes`
  from { transform: rotate(0deg);}
    to { transform: rotate(25deg);}
`;

const jump = keyframes`
  from { transform: translate3d(0, 0, 0);}
    to { transform: translate3d(0, -20px, 0);}
`;

const JumpAlmond = styled.span`
  z-index: 1;
  position: absolute;
  top: -80px;
  right: 10px;
  animation: ${jump} 0.3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const SwingCashew = styled.span`
  z-index: 1;
  position: absolute;
  top: 265px;
  right: 40px;
  animation: ${swing} 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

const SwingTomato = styled.span`
  z-index: 1;
  position: absolute;
  top: -80px;
  right: 150px;
  animation: ${swingTomato} 0.8s;
  animation-direction: alternate-reverse;
  animation-iteration-count: infinite;
`;

export default function WelcomeCard() {
  return (
    <WelcomeCardDiv>
      <JumpAlmond>
        <AlmondIcon />
      </JumpAlmond>
      <SwingCashew>
        <CashewIcon />
      </SwingCashew>
      <SwingTomato>
        <TomatoIcon />
      </SwingTomato>
      <Title boldHeadline>VEGANIZE IT</Title>
      <StyledParagraph>
        Veganize every recipe by replacing animal-based ingredients with
        plant-based alternatives - easy, healthy, sustainable.
      </StyledParagraph>
    </WelcomeCardDiv>
  );
}
