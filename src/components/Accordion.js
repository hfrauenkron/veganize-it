import React, { useState } from "react";
import styled, { css } from "styled-components";
import ArrowIconDown from "../icons/ArrowIconDown";
import BadgeButton from "./BadgeButton";
import UseIcons from "./UseIcons";
import Favourite from "./Favourite";
import Vote from "./Vote";

const AccordionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: -10px;
  padding: 15px;
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
  margin-left: 10px;
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

export default function Accordion({ item, index }) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <AccordionDiv>
      <AccordionHead onClick={handleClick}>
        <div>
          <BadgeButton>{item.name.toUpperCase()}</BadgeButton>
          <StyledArrow clicked={clicked} />
        </div>
        <div>
          <UseIcons />
        </div>
      </AccordionHead>
      <AccordionContent key={index} clicked={clicked}>
        <span>{item.description}</span>
        <p>{item.recipe}</p>
        <StyledIcons>
          <Favourite liked />
          <Vote />
        </StyledIcons>
      </AccordionContent>
    </AccordionDiv>
  );
}

{
  /* <span>
{data[0].alt.map((item, index) => (
  <AccordionDiv>
    <AccordionHead>
      <div>
        <BadgeButton key={index}>{item.toUpperCase()}</BadgeButton>
        <StyledArrow onClick={handleClick} clicked={clicked}>
          <ArrowIconDown />
        </StyledArrow>
      </div>
      <div>
        <UseIcons />
      </div>
    </AccordionHead>
    <AccordionContent clicked={clicked}>
      <p>
        Lorem Ipsum ndjwefnihnu hjklnIJN NJW NJKNJA CNJJKNmdnkwjkjwn
        njwdvnjwnjjskncjksdnckjsnjkcnwkjsdn cdnckjdncjke
      </p>
    </AccordionContent>
  </AccordionDiv>
))}
</span> */
}

{
  /* <span>
  {data[0].alt.map((item, index) => (
    <AccordionDiv>
      {console.log(item)}
      <AccordionHead onClick={handleClick}>
        <div>
          <BadgeButton key={index}>{item.toUpperCase()}</BadgeButton>
          <StyledArrow clicked={clicked} />
        </div>
        <div>
          <UseIcons />
        </div>
      </AccordionHead>
      <AccordionContent key={index} clicked={clicked}>
        {data[0].texts.map(item => (
          <p>{item}</p>
        ))}
        <div>
          <Favourite />
        </div>
      </AccordionContent>
    </AccordionDiv>
  ))}
</span>; */
}
