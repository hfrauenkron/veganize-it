import React from "react";
import styled from "styled-components";

export default function SpeechBubble({ userName }) {
  const StyledSpeechBubble = styled.span`
    background: #fff;
    width: 100%;
    padding: 5px 9px;
    text-align: center;
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #00000029;
    -webkit-appearance: none;
  `;

  const BubbleTriangle = styled.span`
    :before {
      content: " ";
      position: absolute;
      top: 0;
      left: 50%;
      width: 0;
      height: 0;
      border: 15px solid transparent;
      border-bottom-color: #fff;
      border-top: 0;
      margin-left: -47px;
      margin-top: -12px;
    }
  `;

  return (
    <StyledSpeechBubble>
      Welcome, {userName}!
      <BubbleTriangle />
    </StyledSpeechBubble>
  );
}
