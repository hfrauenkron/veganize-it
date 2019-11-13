import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Title from "./Title";

const EnterNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 265px;
`;

const StyledLogin = styled.input`
  border-radius: 8px;
  border: none;
  min-height: 41px;
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
  font-size: 1.3rem;
  -webkit-appearance: none;
`;

const StyledTitleBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0 -10px;
  padding-right: 10px;
  font-size: 1.3rem;
  min-height: 30px;
`;

const StyledTitleTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0 -2px 0;
  padding-right: 5px;
  min-height: 30px;
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

  return (
    <EnterNameDiv>
      <StyledTitleTop>
        <Title>SO GLAD YOU'RE HERE!</Title>
      </StyledTitleTop>
      <div>
        <StyledLogin
          type="text"
          placeholder="What's your name?"
          value={inputValue}
          onChange={handleInput}
        />
      </div>
      <StyledTitleBottom>
        <StyledLink
          to="/home"
          onClick={() => setUserName((userName = inputValue || "Friend"))}
        >
          <Title>START</Title>
        </StyledLink>
      </StyledTitleBottom>
    </EnterNameDiv>
  );
}

EnterUserName.propTypes = {
  userName: PropTypes.string || PropTypes.array,
  setUserName: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};
