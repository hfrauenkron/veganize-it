import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import {
  HeaderTitle,
  HomeTitle,
  FavouritesTitle,
  AboutTitle,
  StartTitle
} from "../stories/Title.stories";
import CloseMenuIcon from "../icons/CloseMenuIcon";
import MenuIcon from "../icons/MenuIcon";
import PropTypes from "prop-types";
// import SpeechBubble from "../components/SpeechBubble";

const HeaderDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100vw;
  min-height: 76px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 34px;
  background: #edffe6;
  color: #242623;
  box-shadow: none;
`;

const MenuDiv = styled.div`
  ${props =>
    props.clicked
      ? css`
          z-index: 100;
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
          margin: 0 0 4px 5.5px;
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
          margin: 0 0 5px 0;
        `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #242623;
`;

export default function Header() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <HeaderDiv>
        <StyledLink to="/home">
          <LogoIcon />
        </StyledLink>
        <HeaderTitle />
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
  clicked: PropTypes.bool
};
