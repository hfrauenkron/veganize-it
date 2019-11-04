import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SpeechBubble({ userName }) {
  const StyledSpeechBubble = styled.span`
    background: #fff;
    padding: 8px 10px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    text-align: center;
    position: relative;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #00000029;
  `;

  const BubbleTriangle = styled.span`
    :before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-left: 10px solid transparent;
      border-right: 10px solid #fff;
      border-top: 10px solid #fff;
      border-bottom: 10px solid transparent;
      left: -15px;
      top: 6px;
    }
  `;

  return (
    <StyledSpeechBubble>
      Welcome, {userName}!
      <BubbleTriangle />
    </StyledSpeechBubble>
  );
}

SpeechBubble.propTypes = {
  userName: PropTypes.string
};
