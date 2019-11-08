import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BadgeButtonClose from "./BadgeButtonClose";
import { Link } from "react-router-dom";
import { getFavouritesFromStorage } from "../api/storage";

const FavouriteListDiv = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function FavouriteList({ onClick }) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  return (
    <FavouriteListDiv>
      {favourites.map(favourite => (
        <BadgeButtonClose key={favourite.id} onClick={onClick}>
          <StyledLink to={`${favourite.url}#${favourite.name.toLowerCase()}`}>
            {favourite.name.toUpperCase()}
          </StyledLink>
        </BadgeButtonClose>
      ))}
    </FavouriteListDiv>
  );
}
