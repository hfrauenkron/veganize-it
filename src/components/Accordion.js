import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowIconDown from "../icons/ArrowIconDown";
import BadgeButton from "./BadgeButton";

const AccordionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: -3px;
  padding: 15px;
  width: 379px;
  border-radius: 10px 10px 0 0;
  box-shadow: 2px -2px 2px #00000029;
  background: #ffffff;
`;

const AccordionHead = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledArrow = styled.span`
  margin: 5px;
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
  color: red;
  overflow: hidden;
  display: ${props => (props.clicked ? "block" : "none")};
  transition: max-height 0.6s ease;
`;

function Accordion() {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <>
      <AccordionDiv>
        <AccordionHead>
          <BadgeButton list>SOY MILK</BadgeButton>
          <StyledArrow onClick={handleClick} clicked={clicked}>
            <ArrowIconDown />
          </StyledArrow>
        </AccordionHead>
        <AccordionContent clicked={clicked}>
          <p>
            Lorem Ipsum ndjwefnihnu hjklnIJN NJW NJKNJA CNJJKNmdnkwjkjwn
            njwdvnjwnjjskncjksdnckjsnjkcnwkjsdn cdnckjdncjke
          </p>
        </AccordionContent>
      </AccordionDiv>
      <AccordionDiv>
        <AccordionHead>
          <BadgeButton list>SOY MILK</BadgeButton>
          <StyledArrow onClick={handleClick} clicked={clicked}>
            <ArrowIconDown />
          </StyledArrow>
        </AccordionHead>
        <AccordionContent clicked={clicked}>
          <p>
            Lorem Ipsum ndjwefnihnu hjklnIJN NJW NJKNJA CNJJKNmdnkwjkjwn
            njwdvnjwnjjskncjksdnckjsnjkcnwkjsdn cdnckjdncjke
          </p>
        </AccordionContent>
      </AccordionDiv>
    </>
  );
}

export default Accordion;
