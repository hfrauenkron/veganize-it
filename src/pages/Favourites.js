import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import BadgeButtonClose from "../components/BadgeButtonClose";
import { Link } from "react-router-dom";
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

export default function Favourites({ data, id, name }) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());

  React.useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  function handleRemoveFavourite() {
    setFavourites(favourites.filter(favourite => (favourite.id = id)));
  }

  // const favData = data.find(
  //   item => item.name.toLowerCase() === name.toLowerCase()
  // );

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
    </WrapperDiv>
  );
}
