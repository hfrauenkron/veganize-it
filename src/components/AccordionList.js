import React from "react";
import Accordion from "./Accordion";

export default function AccordionList({
  alt,
  nameClicked,
  favourites,
  setFavourites
}) {
  return (
    <>
      {alt.map(item => (
        <Accordion
          setFavourites={setFavourites}
          favourites={favourites}
          name={nameClicked}
          key={item.name}
          {...item}
        />
      ))}
    </>
  );
}
