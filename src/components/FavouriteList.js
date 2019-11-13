import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BadgeButtonClose from "./BadgeButtonClose";
import { Link } from "react-router-dom";
import {
  getFavouritesFromStorage,
  setFavouritesToStorage
} from "../api/storage";

const FavouriteListDiv = styled.div`
  max-width: 500px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function FavouriteList() {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  function handleRemoveFavourite(favourite) {
    const existingIndex = favourites.findIndex(
      existingFavourite => existingFavourite.id === favourite.id
    );
    if (existingIndex !== -1) {
      const favouritesList = [...favourites];
      favouritesList.splice(existingIndex, 1);
      setFavourites(favouritesList);
    }
  }

  React.useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  console.log(favourites);

  return (
    <FavouriteListDiv>
      {favourites.map(favourite => (
        <BadgeButtonClose
          key={favourite.id}
          onClick={() => {
            handleRemoveFavourite(favourite);
          }}
        >
          <StyledLink to={`${favourite.url}#${favourite.name.toLowerCase()}`}>
            {favourite.name.toUpperCase()}
          </StyledLink>
        </BadgeButtonClose>
      ))}
    </FavouriteListDiv>
  );
}

FavouriteList.propTypes = {
  onClick: PropTypes.func
};
