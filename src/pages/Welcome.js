import React, { useState } from "react";
import styled from "styled-components";
import WelcomeCard from "../components/WelcomeCard";
import Login from "../components/Login";
import { Redirect } from "react-router-dom";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Welcome() {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 5000);
  return (
    <>
      {redirect ? (
        <Redirect to="/home" />
      ) : (
        <WrapperDiv>
          <WelcomeCard />
          <Login />
        </WrapperDiv>
      )}
    </>
  );
}
