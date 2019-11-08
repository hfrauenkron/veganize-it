import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const StyledSpeechBubble = styled.span`
  background: #fff;
  width: 100%;
  padding: 5px 9px;
  text-align: center;
  position: relative;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #00000029;
  -webkit-appearance: none;
  ::before {
    content: " ";
    position: absolute;
    top: 0;
    border: 15px solid transparent;
    border-bottom-color: #fff;
    border-top: 0;
    margin-top: -12px;
  }
`;

export default function SpeechBubble({ children, clicked }) {
  return <StyledSpeechBubble clicked={clicked}>{children}</StyledSpeechBubble>;
}

SpeechBubble.propTypes = {
  children: PropTypes.node
};
