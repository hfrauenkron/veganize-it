import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import FavouriteList from "../components/FavouriteList";
import FloatingHearts from "../components/FloatingHearts";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  min-height: 100%;
  overflow: hidden;
`;

export default function Favourites() {
  return (
    <WrapperDiv>
      <Header showBubble children="Find your favourites here!" />
      <Title headline>FAVOURITES</Title>
      <FavouriteList />
      <FloatingHearts />
    </WrapperDiv>
  );
}
