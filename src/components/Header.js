import React from "react";
import styled, { css } from "styled-components";
import LogoIcon from "../icons/LogoIcon";
import {
  HeaderTitle,
  HomeTitle,
  FavouritesTitle,
  AccountTitle,
  AboutTitle
} from "../stories/Title.stories";
import CloseMenuIcon from "../icons/CloseMenuIcon";
import MenuIcon from "../icons/MenuIcon";
import PropTypes from "prop-types";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 414px;
  height: 76px;
  border: none;
  font-family: "Fira Sans", sans-serif;
  font-weight: 900;
  font-size: 34px;
  background: #edffe6;
  color: #242623;
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  box-shadow: 0 2px 2px 0 #00000029;
  background-color: #edffe6;
`;

const MenuItemsDiv = styled.div`
  ${props =>
    props.selected
      ? css`
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 414px;
          height: 159px;
          margin-left: 15px;
        `
      : css`
          display: none;
        `}
`;

const StyledCloseMenuIcon = styled.div`
  ${props =>
    props.selected
      ? css`
          display: block;
          margin-left: 5.5px;
        `
      : css`
          display: none;
        `}
`;

const StyledMenuIcon = styled.div`
  ${props =>
    props.selected
      ? css`
          display: none;
        `
      : css`
          display: block;
        `}
`;

export default function Header({ selected }) {
  return (
    <HeaderMenuDiv>
      <HeaderDiv>
        <LogoIcon />
        <HeaderTitle />
        <StyledCloseMenuIcon selected={selected}>
          <CloseMenuIcon />
        </StyledCloseMenuIcon>
        <StyledMenuIcon selected={selected}>
          <MenuIcon />
        </StyledMenuIcon>
      </HeaderDiv>
      <MenuItemsDiv selected={selected}>
        <HomeTitle />
        <FavouritesTitle />
        <AccountTitle />
        <AboutTitle />
      </MenuItemsDiv>
    </HeaderMenuDiv>
  );
}

Header.propTypes = {
  selected: PropTypes.bool
};
