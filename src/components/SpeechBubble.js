import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function SpeechBubble({ children }) {
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
      border: 15px solid transparent;
      border-bottom-color: #fff;
      border-top: 0;
      margin-left: -70px;
      margin-top: -12px;
    }
  `;

  return (
    <StyledSpeechBubble>
      {children}
      <BubbleTriangle />
    </StyledSpeechBubble>
  );
}

SpeechBubble.propTypes = {
  children: PropTypes.node.isRequired
};
