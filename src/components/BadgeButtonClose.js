import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";
import PropTypes from "prop-types";

const WrapperBadge = styled.div`
  margin: 15px 10px;
`;

const BadgeButtonSpan = styled.span`
  position: relative;
  border-radius: 5px;
  padding: 4px 12px 3px 11px;
  border: none;
  box-shadow: 2px 2px 2px #00000029;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  background: #242623;
  color: #ffffff;
  cursor: pointer;
`;

const StyledCloseButton = styled.span`
  position: absolute;
  right: -16px;
  top: -16px;
  cursor: pointer;
`;

export default function BadgeButtonClose({ onClick, children }) {
  return (
    <WrapperBadge>
      <BadgeButtonSpan>
        {children}
        <StyledCloseButton onClick={onClick}>
          <CloseButton />
        </StyledCloseButton>
      </BadgeButtonSpan>
    </WrapperBadge>
  );
}

BadgeButtonClose.propTypes = {
  children: PropTypes.node.isRequired
};
