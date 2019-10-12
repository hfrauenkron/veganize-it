import React from "react";
import styled, { css } from "styled-components";

const HeadTitle = styled.h1`
  margin: 0;
  padding: 4px 0 3px 5px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  color: #242623;
  font-weight: 900;
  ${props => {
    if (props.boldHeadline) {
      return `font-size: 52px;`;
    } else if (props.headline) {
      return `font-size: 34px;
        `;
    } else {
      return `font-size: 21px`;
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
        `}
`;

export default function Title({ link, headline, boldHeadline, children }) {
  return (
    <HeadTitle link={link} headline={headline} boldHeadline={boldHeadline}>
      {children}
    </HeadTitle>
  );
}
