import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import BadgeButtonClose from "../components/BadgeButtonClose";
import { Link } from "react-router-dom";

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

export default function Favourites({
  favouriteData,
  data,
  handleRemoveFavourite
}) {
  const id = data.find(item => item.id && item.name);
  return (
    <WrapperDiv>
      <Header />
      <Title headline>FAVOURITES</Title>
      <BadgeButtonList>
        {favouriteData.map(favouriteItem => (
          <BadgeButtonClose
            id={id}
            handleRemoveFavourite={handleRemoveFavourite}
          >
            <StyledLink to={`/home/${data.name}`}>
              {favouriteItem.toUpperCase()}
            </StyledLink>
          </BadgeButtonClose>
        ))}
      </BadgeButtonList>
    </WrapperDiv>
  );
}
