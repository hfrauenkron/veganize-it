import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import {
  HomeTitle,
  FavouritesTitle,
  AboutTitle,
  StartTitle
} from "../stories/Title.stories";
import CloseMenuIcon from "../icons/CloseMenuIcon";
import MenuIcon from "../icons/MenuIcon";
import PropTypes from "prop-types";
import SpeechBubble from "../components/SpeechBubble";
import Title from "./Title";

const HeaderDiv = styled.div`
  z-index: 99;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;
  min-height: 76px;
  border: none;
  background: #edffe6;
  color: #242623;
  box-shadow: none;
`;

const MenuDiv = styled.div`
  ${props =>
    props.clicked
      ? css`
          z-index: 98;
          position: absolute;
          margin-top: 76px;
        `
      : css`
          z-index: none;
          position: none;
        `}
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-shadow: 0 2px 2px 0 #00000029;
  background-color: #edffe6;
`;

const MenuItemsDiv = styled.div`
  ${props =>
    props.clicked
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 414px;
          height: 135px;
          text-decoration: none;
        `
      : css`
          display: none;
        `};
`;

const StyledCloseMenuIcon = styled.div`
  ${props =>
    props.clicked
      ? css`
          display: block;
          margin: 5px 0 4px 5.5px;
          cursor: pointer;
        `
      : css`
          display: none;
        `}
`;

const StyledMenuIcon = styled.div`
  ${props =>
    props.clicked
      ? css`
          display: none;
        `
      : css`
          display: block;
          cursor: pointer;
          margin: 5px 0 5px 0;
        `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #242623;
  :hover {
    transform: scale(1.2);
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  backdrop-filter: blur(2.5px);
  position: fixed;
  z-index: 1;
  top: 0;
  ${props =>
    props.clicked
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const StyledSpeechBubble = styled.span`
  z-index: 101;
  position: absolute;
  left: 35px;
  top: 60px;
  transform: rotate(-3deg);
  ${props =>
    props.showBubble
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const StyledTitle = styled(Title)`
  @media (min-width: 300px) {
    font-size: calc(28px + (46 - 28) * ((100vw - 300px) / (1600 - 300)));
    margin: 0 8px 0 0;
  }
`;

export default function Header({ userName, showBubble }) {
  const [clicked, setClicked] = useState(false);
  // const [show, setShow] = useState(false);
  // const node = useRef();
  // useOnClickOutside(node, () => setShow(false));

  return (
    <>
      <Background clicked={clicked} />
      <HeaderDiv>
        <StyledLink to="/home">
          <LogoIcon />
        </StyledLink>
        <StyledSpeechBubble showBubble={showBubble}>
          <SpeechBubble userName={userName} />
        </StyledSpeechBubble>
        <StyledTitle boldHeadline>VEGANIZE IT</StyledTitle>
        <StyledCloseMenuIcon
          onClick={() => setClicked(false)}
          clicked={clicked}
        >
          <CloseMenuIcon />
        </StyledCloseMenuIcon>
        <StyledMenuIcon onClick={() => setClicked(true)} clicked={clicked}>
          <MenuIcon />
        </StyledMenuIcon>
      </HeaderDiv>

      <MenuDiv clicked={clicked}>
        <MenuItemsDiv clicked={clicked}>
          <StyledLink to="/">
            <StartTitle />
          </StyledLink>
          <StyledLink to="/home">
            <HomeTitle />
          </StyledLink>
          <StyledLink to="/favourites">
            <FavouritesTitle />
          </StyledLink>
          <StyledLink to="/about">
            <AboutTitle />
          </StyledLink>
        </MenuItemsDiv>
      </MenuDiv>
    </>
  );
}

Header.propTypes = {
  clicked: PropTypes.bool,
  onClick: PropTypes.func
};
