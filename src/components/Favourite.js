import React from "react";
import styled, { css } from "styled-components";
import FavouriteIcon from "../icons/FavouriteIcon";
import PropTypes from "prop-types";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: medium;
  font-size: 1.3rem;
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

export default function Favourite({ onClick, liked }) {
  return (
    <WrapperDiv onClick={onClick}>
      <StyledFavouriteIcon liked={liked} />
    </WrapperDiv>
  );
}

Favourite.propTypes = {
  liked: PropTypes.object,
  onClick: PropTypes.func
};
