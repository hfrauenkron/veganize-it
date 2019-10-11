import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 379px;
  height: 533px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 21px;
  background: #ffffff;
  color: #242623;
  box-shadow: 2px -2px 2px #00000029;
  border-radius: 10px;
`;

export default function Card() {
  return <CardDiv />;
}
