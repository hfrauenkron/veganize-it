import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const WrapperBadge = styled.div`
  margin: 25px 10px;
`;

const BadgeSpan = styled.span`
  border-radius: 5px;
  padding: 4px 10px 3px 10px;
  border: none;
  box-shadow: 2px 2px 2px #00000029;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 21px;
  background: #242623;
  color: #ffffff;
  cursor: pointer;
`;

const StyledCloseButton = styled.span`
  position: absolute;
  left: 114px;
  top: -2px;
  cursor: pointer;
`;

export default function BadgeClose({ children }) {
  return (
    <WrapperBadge>
      <BadgeSpan>
        {children}
        <StyledCloseButton>
          <CloseButton />
        </StyledCloseButton>
      </BadgeSpan>
    </WrapperBadge>
  );
}
