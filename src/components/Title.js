import React from "react";
import styled, { css } from "styled-components";

const HeadTitle = styled.h1`
  margin: 0;
  padding: 4px 15px 3px 5px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  color: #242623;
  font-weight: 900;
  ${props =>
    props.active
      ? css`
          font-size: 34px;
        `
      : css`
          font-size: 21px;
        `}
`;

export default function Title({ active, children }) {
  return <HeadTitle active={active}>{children}</HeadTitle>;
}
