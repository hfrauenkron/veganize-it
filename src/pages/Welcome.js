import React from "react";
import styled from "styled-components";
import WelcomeCard from "../components/WelcomeCard";
import EnterUserName from "../components/EnterUserName";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Welcome({ setUserName, userName }) {
  function handleSetUserName() {
    setUserName(!userName);
  }

  return (
    <WrapperDiv>
      <WelcomeCard />
      <EnterUserName
        userName={userName}
        onClick={handleSetUserName}
        setUserName={setUserName}
      />
    </WrapperDiv>
  );
}
