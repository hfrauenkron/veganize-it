import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ArrowIconDown from "../icons/ArrowIconDown";

const WrapperBadge = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 25px 10px;
`;

const BadgeButtonSpan = styled.span`
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

const StyledArrowIconDown = styled.span`
  margin-left: 8px;
  cursor: pointer;
`;

export default function BadgeArrow({ children }) {
  return (
    <WrapperBadge>
      <BadgeButtonSpan>{children}</BadgeButtonSpan>
      <StyledArrowIconDown>
        <ArrowIconDown />
      </StyledArrowIconDown>
    </WrapperBadge>
  );
}

BadgeArrow.propTypes = {
  children: PropTypes.node.isRequired
};
