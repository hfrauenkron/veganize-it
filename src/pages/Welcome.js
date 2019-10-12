import React from "react";
import styled from "styled-components";
import MainBackground from "../components/MainBackground";
import WelcomeCard from "../components/WelcomeCard";
import Login from "../components/Login";
import Title from "../components/Title";

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
