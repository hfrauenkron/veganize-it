import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import BadgeButtonList from "../components/BadgeButtonList";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <WrapperDiv>
      <Header />
      <Searchbar />
      <BadgeButtonList />
    </WrapperDiv>
  );
}
