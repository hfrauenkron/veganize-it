import React from "react";
import styled from "styled-components";
import Title from "./Title";

const MainBody = styled.main`
  z-index: -100;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  width: 414px;
  height: 736px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 21px;
  background: #d3e5cc;
  color: #242623;
`;

export default function MainBackground() {
  return (
    <MainBody>
      <Title boldHeadline />
    </MainBody>
  );
}
