import React from "react";
import styled from "styled-components";
import WelcomeCard from "../components/WelcomeCard";
import Login from "../components/Login";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Welcome() {
  return (
    <WrapperDiv>
      <WelcomeCard />
      <Login />
    </WrapperDiv>
  );
}
