import React from "react";
import Accordion from "./Accordion";

export default function AccordionList({ alt, nameClicked }) {
  return (
    <>
      {alt.map(item => (
        <Accordion name={nameClicked} key={item.name} id={alt.id} {...item} />
      ))}
    </>
  );
}
