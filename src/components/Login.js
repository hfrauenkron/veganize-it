import React from "react";
import styled from "styled-components";
import { SkipTitle, LoginTitle, RegisterTitle } from "../stories/Title.stories";

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 265px;
`;

const StyledLogin = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  height: 41px;
  width: 265px;
  background: #edffe6;
  box-shadow: 2px 2px 2px #00000029;
  padding-left: 15px;
  margin-top: 12px;
  ::placeholder {
    color: #bebebe;
  }
  :focus {
    outline: none;
  }
  font-size: 20px;
`;

const StyledTitleBottom = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

const StyledTitleTop = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 12px;
`;

export default function Login() {
  return (
    <LoginDiv>
      <StyledTitleTop>
        <LoginTitle />
        <RegisterTitle />
      </StyledTitleTop>
      <StyledLogin type="text" placeholder="Username" />
      <StyledLogin type="password" placeholder="Password" />
      <StyledTitleBottom>
        <SkipTitle />
      </StyledTitleBottom>
    </LoginDiv>
  );
}
