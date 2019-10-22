import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import BadgeButtonClose from "../components/BadgeButtonClose";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Favourites({ children }) {
  return (
    <WrapperDiv>
      <Header />
      <Title headline>FAVOURITES</Title>
      <BadgeButtonClose>{children}</BadgeButtonClose>
    </WrapperDiv>
  );
}
