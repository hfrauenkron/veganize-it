import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const HeadTitle = styled.h1`
  z-index: 0;
  position: relative;
  margin: 0;
  padding: 0 0 3px 5px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  ${props =>
    props.inactive
      ? css`
          color: #bebebe;
        `
      : css`
          color: #242623;
        `};
  ${props => {
    if (props.boldHeadline) {
      return `font-size: 52px;`;
    } else if (props.headerHeadline) {
      return `font-size: 34px; margin: 0 30px 0 0;
        `;
    } else if (props.headline) {
      return `font-size: 21px; margin: 20px;
        `;
    } else {
      return `font-size: 21px;`;
    }
  }};
  ${props =>
    props.link
      ? css`
          text-decoration: underline;
          cursor: pointer;
        `
      : css`
          text-decoration: none;
        `};
`;

export default function Title({
  onClick,
  link,
  headline,
  headerHeadline,
  boldHeadline,
  inactive,
  children
}) {
  return (
    <HeadTitle
      onClick={onClick}
      link={link}
      headline={headline}
      headerHeadline={headerHeadline}
      boldHeadline={boldHeadline}
      inactive={inactive}
    >
      {children}
    </HeadTitle>
  );
}

Title.propTypes = {
  onClick: PropTypes.func,
  link: PropTypes.bool,
  headline: PropTypes.bool,
  boldHeadline: PropTypes.bool,
  inactive: PropTypes.bool,
  children: PropTypes.node.isRequired
};
