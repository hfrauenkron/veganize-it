import React from "react";
import styled, { css } from "styled-components";

const HeadTitle = styled.h1`
  margin: 0;
  padding: 0 0 3px 5px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  color: #242623;
  font-weight: 900;
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
          text-decoration: none;
          cursor: pointer;
        `
      : css`
          text-decoration: none;
        `};
`;

export default function Title({
  link,
  headline,
  headerHeadline,
  boldHeadline,
  children
}) {
  return (
    <HeadTitle
      link={link}
      headline={headline}
      headerHeadline={headerHeadline}
      boldHeadline={boldHeadline}
    >
      {children}
    </HeadTitle>
  );
}
