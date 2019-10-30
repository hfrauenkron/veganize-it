import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { NameTitle, StartTitle } from "../stories/Title.stories";

const EnterNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 265px;
`;

const StyledLogin = styled.input`
  border-radius: 8px;
  border: none;
  height: 41px;
  width: 240px;
  background: #edffe6;
  box-shadow: 2px 2px 2px #00000029;
  padding-left: 15px;
  margin: 5px 0;
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
  align-items: center;
  margin: 10px 0 -10px;
  padding-right: 10px;
  font-size: 21px;
`;

const StyledTitleTop = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 12px 0 -2px 0;
  padding-right: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #242623;
`;

export default function EnterUserName({ userName, setUserName }) {
  const [inputValue, setInputValue] = useState();

  function handleInput(event) {
    const { value } = event.target;
    setInputValue(value);
  }

  // function handleStartClick() {
  //   const input = value;
  //   if (input === "") {
  //     alert;
  //   } else setUserName(input);
  // }

  return (
    <EnterNameDiv>
      <StyledTitleTop>
        <NameTitle />
      </StyledTitleTop>
      <StyledLogin
        type="text"
        placeholder="Name"
        value={inputValue}
        onChange={handleInput}
        required
      />
      <StyledTitleBottom>
        <StyledLink
          to="/home"
          onClick={() => setUserName((userName = inputValue || "Friend"))}
          disabled
        >
          <StartTitle />
        </StyledLink>
      </StyledTitleBottom>
    </EnterNameDiv>
  );
}

// handleStartClick(inputValue)
