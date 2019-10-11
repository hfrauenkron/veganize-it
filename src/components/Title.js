import React from "react";
import styled, { css } from "styled-components";

const HeadTitle = styled.h1`
  margin: 0;
  padding: 4px 0 3px 5px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  color: #242623;
  font-weight: 900;
  ${props =>
    props.headline
      ? css`
          font-size: 34px;
        `
      : css`
          font-size: 21px;
        `};
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

export default function Title({ link, active, children }) {
  return (
    <HeadTitle link={link} headline={active}>
      {children}
    </HeadTitle>
  );
}
