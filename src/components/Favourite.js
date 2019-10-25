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
    props.liked
      ? css`
          fill: #e44346;
          stroke: #e44346;
        `
      : css`
          fill: #ffffff;
          stroke: #242623;
        `}
`;

export default function Favourite({ handleSetFavourite }) {
  const [liked, setLiked] = useState(false);

  function handleLiked() {
    setLiked(!liked);
    handleSetFavourite();
  }

  return (
    <WrapperDiv onClick={handleLiked}>
      <StyledFavouriteIcon liked={liked} />
    </WrapperDiv>
  );
}
