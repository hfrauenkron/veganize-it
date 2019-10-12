import React from "react";
import styled, { css } from "styled-components";
import FavouriteIcon from "../icons/FavouriteIcon";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: medium;
  font-size: 20px;
  border: none;
  color: #242623;
  padding: 0px;
`;

const StyledFavouriteIcon = styled(FavouriteIcon)`
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #00000029);
  ${props =>
    props.clicked
      ? css`
          fill: #e44346;
          stroke: #e44346;
        `
      : css`
          fill: #ffffff;
          stroke: #242623;
        `}
`;

export default function Favourite({ clicked }) {
  return (
    <WrapperDiv>
      <StyledFavouriteIcon clicked={clicked} />
    </WrapperDiv>
  );
}
