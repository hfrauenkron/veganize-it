import React from "react";
import Accordion from "./Accordion";
import { data } from "../api/data";

export default function AccordionList({ handleClick }) {
  let output = [];
  data.map(item => output.push(...item.alt));
  console.log(output);
  return (
    <>
      <Accordion handleClick={handleClick} />
    </>
  );
}
// {data[1].alt.map((item, index) => (     ))}
