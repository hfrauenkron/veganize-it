import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function About() {
  return (
    <WrapperDiv>
      <Header />
      <Title headline>ABOUT</Title>
      <Card>
        This app was created to provide simple access to knowledge about the
        many and versatile uses of plant-based foods. The massive amounts of
        animal products consumed in modern societies have devastating affects on
        the health of humans and the planet…
      </Card>
      <Title headline>CREDITS</Title>
      <Card>
        Credits go to the wonderful Simple Happy Kitchen, who kindly lent some
        of their icons to this app and its cause.
      </Card>
    </WrapperDiv>
  );
}
