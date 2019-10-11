import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const BadgeSpan = styled.span`
  border-radius: 5px;
  padding: 4px 10px 3px 10px;
  border: none;
  box-shadow: 2px 2px 2px #00000029;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 21px;
  ${props =>
    props.light
      ? css`
          background: #ffffff;
          color: #242623;
        `
      : css`
          background: #242623;
          color: #ffffff;
        `}
  margin: 5px;
  cursor: pointer;
`;

export default function Badge({ active, children }) {
  return <BadgeSpan light={active}>{children}</BadgeSpan>;
}

Badge.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired
};
