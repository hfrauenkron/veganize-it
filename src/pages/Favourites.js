import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import BadgeButtonClose from "../components/BadgeButtonClose";
import { Link } from "react-router-dom";
import { getFavouritesFromStorage } from "../api/storage";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BadgeButtonList = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

export default function Favourites({ id }) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  function handleRemoveFavourite(favourites) {
    setFavourites(favourites.filter(favourite => favourite.id === id));
  }
  console.log(favourites);

  return (
    <WrapperDiv>
      <Header showBubble children="Find your favourites here!" />
      <Title headline>FAVOURITES</Title>
      <BadgeButtonList>
        {favourites.map(favourite => (
          <BadgeButtonClose key={favourite.id} onClick={handleRemoveFavourite}>
            <StyledLink to={`${favourite.url}#${favourite.name.toLowerCase()}`}>
              {favourite.name.toUpperCase()}
            </StyledLink>
          </BadgeButtonClose>
        ))}
      </BadgeButtonList>
    </WrapperDiv>
  );
}
