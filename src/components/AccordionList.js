import React from "react";
import Accordion from "./Accordion";
import { data } from "../api/data";

export default function AccordionList({ handleClick }) {
  return (
    <>
      {data[0].alt.map((item, index) => (
        <Accordion handleClick={handleClick} item={item} key={index} />
      ))}
    </>
  );
}
