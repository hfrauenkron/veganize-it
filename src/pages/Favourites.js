import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import FavouriteList from "../components/FavouriteList";
// import { Link } from "react-router-dom";
import {
  getFavouritesFromStorage,
  removeFavouritesFromStorage
} from "../api/storage";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const BadgeButtonList = styled.div`
//   max-width: 500px;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: #fff;
// `;

export default function Favourites() {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  // function handleChangeFavourites(favourite) {
  //   const existingIndex = favourites.findIndex(
  //     existingFavourite => existingFavourite.id === favourite.id
  //   );
  //   if (existingIndex === -1) {
  //     const favouritesList = [...favourites, favourite];
  //     setFavourites(favouritesList);
  //   } else {
  //     const favouritesList = [...favourites];
  //     favouritesList.splice(existingIndex, 1);
  //     setFavourites(favouritesList);
  //   }
  // }

  function handleRemoveFavourite() {
    removeFavouritesFromStorage();
  }
  console.log(favourites);

  return (
    <WrapperDiv>
      <Header showBubble children="Find your favourites here!" />
      <Title headline>FAVOURITES</Title>
      <FavouriteList onClick={handleRemoveFavourite} />
    </WrapperDiv>
  );
}

// function handleRemoveFavourite() {
//   setFavourites(favourites.filter(favourite => favourite.id === id));
// }
// console.log(favourites);
