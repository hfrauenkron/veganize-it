import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowIconDown from "../icons/ArrowIconDown";
import BadgeButton from "./BadgeButton";
import Favourite from "./Favourite";
import {
  getFavouritesFromStorage,
  setFavouritesToStorage
} from "../api/storage";

const AccordionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: -10px;
  padding: 15px 7px 15px 15px;
  width: 379px;
  border-radius: 10px 10px 0 0;
  box-shadow: 2px -2px 2px #00000029;
  background: #ffffff;
`;

const AccordionHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  width: 100%;
`;

const StyledIcons = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledArrow = styled(ArrowIconDown)`
  margin-left: 5px;
  cursor: pointer;
  ${props =>
    props.clicked
      ? css`
          transform: rotate(180deg);
        `
      : css`
          transform: rotate(0deg);
        `}
`;

const AccordionContent = styled.div`
  min-width: 100px;
  color: #242623;
  padding: 5px;
  overflow: hidden;
  display: ${props => (props.clicked ? "block" : "none")};
  transition: max-height 0.6s ease;
`;

const StyledRecipeTitle = styled.h2`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.3rem;
`;

export default function Accordion({ id, name, description, use, recipe }) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);

  React.useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleLiked() {
    setLiked(!liked);
    console.log(!liked);
  }

  // let liked = favourites.find(favourite => favourite.id === id);

  let favourite = { name, id };

  function handleSetFavourite() {
    if (
      !favourites.find(existingFavorite => existingFavorite.id === favourite.id)
    ) {
      const favouritesList = [...favourites, favourite];
      setFavourites(favouritesList);
    }
  }

  return (
    <AccordionDiv>
      <AccordionHead onClick={handleClick}>
        <div>
          <BadgeButton>{name.toUpperCase()}</BadgeButton>
          <StyledArrow clicked={clicked} />
        </div>
        <div>{use}</div>
      </AccordionHead>
      <AccordionContent clicked={clicked}>
        <span>{description}</span>
        <StyledRecipeTitle>{recipe.title.toUpperCase()}</StyledRecipeTitle>
        <p>{recipe.text}</p>
        <StyledIcons>
          <Favourite
            // liked={liked}
            onClick={() => {
              handleSetFavourite();
              handleLiked(liked);
            }}
          />
        </StyledIcons>
      </AccordionContent>
    </AccordionDiv>
  );
}
