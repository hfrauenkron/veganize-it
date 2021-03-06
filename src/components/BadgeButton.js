import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const BadgeButtonSpan = styled.span`
  border-radius: 5px;
  padding: 4px 10px 3px 10px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
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
  ${props =>
    props.list
      ? css`
          margin: 5px 5px 5px 5px;
          cursor: pointer;
          box-shadow: 2px 2px 2px #00000029;
        `
      : css`
          margin: 15px 0 20px 0;
        `}
        text-decoration: none;
`;

export default function BadgeButton({ light, list, children }) {
  return (
    <BadgeButtonSpan list={list ? 1 : 0} light={light}>
      {children}
    </BadgeButtonSpan>
  );
}

BadgeButton.propTypes = {
  list: PropTypes.bool,
  light: PropTypes.bool,
  children: PropTypes.node.isRequired
};
