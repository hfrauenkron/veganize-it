import React from "react";
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";

const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  height: 28px;
  width: 28px;
  border: none;
  box-shadow: 2px 2px 2px #00000029;
  background: #ffffff;
  color: #242623;
  margin: 5px;
  cursor: pointer;
`;

export default function CloseButton() {
  return (
    <StyledCloseButton>
      <CloseIcon />
    </StyledCloseButton>
  );
}
