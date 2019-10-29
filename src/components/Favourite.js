import React, { useState } from "react";
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
`;

const StyledFavouriteIcon = styled(FavouriteIcon)`
  cursor: pointer;
  margin: 0 5px 5px 0;
  filter: drop-shadow(2px 2px 2px #00000029);
  ${props =>
    props.like
      ? css`
          fill: #e44346;
          stroke: #e44346;
        `
      : css`
          fill: #ffffff;
          stroke: #242623;
        `}
`;

export default function Favourite({
  handleSetFavourite,
  favourites,
  setFavourites
}) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setFavourites(favourites);
    setLike(!like);
    handleSetFavourite();
    console.log(!like);
  }

  return (
    <WrapperDiv onClick={handleLike}>
      <StyledFavouriteIcon like={like} favourites={favourites} />
    </WrapperDiv>
  );
}
