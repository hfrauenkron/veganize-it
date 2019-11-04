import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import BadgeButtonClose from "../components/BadgeButtonClose";
import { Link } from "react-router-dom";
import Favourite from "../components/Favourite";
import {
  getFavouritesFromStorage,
  setFavouritesToStorage
} from "../api/storage";

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

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default function Favourites({ data }) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  React.useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  const handleRemoveFavourite = id => {
    setFavourites(favourites.filter(favourite => favourite.id === id));
  };

  return (
    <WrapperDiv>
      <Header />
      <Title headline>FAVOURITES</Title>
      <BadgeButtonList>
        {favourites.map(favourite => (
          <BadgeButtonClose key={favourite.id} onClick={handleRemoveFavourite}>
            <StyledLink to={`/home/${data.name}`}>
              {favourite.name.toUpperCase()}
            </StyledLink>
          </BadgeButtonClose>
        ))}
      </BadgeButtonList>
      <StyledSpan>
        <p>Save your plant-based favourites here, by clicking the</p>
        &nbsp;
        <span>
          <Favourite />
        </span>
      </StyledSpan>
    </WrapperDiv>
  );
}
