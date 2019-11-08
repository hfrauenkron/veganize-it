import React, { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
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
  -webkit-appearance: none;
`;

const StyledRecipeTitle = styled.h2`
  font-family: "Fira Sans", sans-serif;
  font-size: 1.3rem;
`;

function useQuery(location) {
  return new URLSearchParams(location.search);
}

export default function Accordion({
  id,
  name,
  description,
  use,
  recipe,
  location,
  history
}) {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());
  const query = useQuery(location);

  let urlName = name.toLowerCase();

  const [clicked, setClicked] = useState(
    location.hash.replace(/%20/g, " ") === `#${urlName}`
  );
  console.log(location, query.getAll("clicked"));
  React.useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  let url = window.location.pathname;
  localStorage.setItem("url", url);

  let favourite = { name, id, url };

  let liked = favourites.find(favourite => favourite.id === id);

  function handleClick() {
    setClicked(!clicked);
    history.push(`#${urlName}`);
  }
  function handleChangeFavourites() {
    const existingIndex = favourites.findIndex(
      existingFavourite => existingFavourite.id === favourite.id
    );
    if (existingIndex === -1) {
      const favouritesList = [...favourites, favourite];
      setFavourites(favouritesList);
    } else {
      const favouritesList = [...favourites];
      favouritesList.splice(existingIndex, 1);
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
            liked={liked}
            onClick={() => {
              handleChangeFavourites();
            }}
          />
        </StyledIcons>
      </AccordionContent>
    </AccordionDiv>
  );
}

Accordion.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  use: PropTypes.object,
  recipe: PropTypes.object
};
