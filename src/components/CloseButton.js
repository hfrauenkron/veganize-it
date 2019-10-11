import React from "react";
import styled from "styled-components";
import CloseIcon from "../icons/CloseIcon";

const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: none;
  box-shadow: 2px 2px 2px #00000029;
  background: #ffffff;
  color: #242623;
  padding: 0px;
  /* margin: auto; */
`;

export default function CloseButton() {
  return (
    <StyledCloseButton>
      <CloseIcon />
    </StyledCloseButton>
  );
}
