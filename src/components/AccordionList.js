import React from "react";
import PropTypes from "prop-types";
import Accordion from "./Accordion";

export default function AccordionList({ alt, nameClicked, location, history }) {
  return (
    <>
      {alt.map(item => (
        <Accordion
          name={nameClicked}
          key={item.name}
          id={alt.id}
          {...item}
          location={location}
          history={history}
        />
      ))}
    </>
  );
}

AccordionList.propTypes = {
  alt: PropTypes.array,
  nameClicked: PropTypes.bool
};
