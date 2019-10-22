import React from "react";
import Accordion from "./Accordion";

export default function AccordionList({ alt }) {
  // let output = [];
  // data.map(item => output.push(...item.alt));

  return (
    <>
      {alt.map(item => (
        <Accordion key={item.name} {...item} />
      ))}
    </>
  );
}

// export default function AccordionList({ handleClick }) {
//   return (
//     <>
//       {data[0].alt.map((item, index) => (
//         <Accordion handleClick={handleClick} item={item} key={index} />
//       ))}
//     </>
//   );
// }
