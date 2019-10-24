import React from "react";
import styled from "styled-components";
import RawIcon from "../icons/RawIcon";
import CoffeeIcon from "../icons/CoffeeIcon";
import CookingIcon from "../icons/CookingIcon";
import BakingIcon from "../icons/BakingIcon";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 12px;
  width: 379px;
  height: 100%;
  border: none;
  background: #edffe6;
  box-shadow: 2px 2px 2px #00000029;
  /* border-radius: 10px; */
  margin: 30px 20px 0px;
  padding: 10px 20px 15px 20px;
`;

const StyledRawIcon = styled(RawIcon)`
  stroke: #242623;
`;

const StyledCoffeeIcon = styled(CoffeeIcon)`
  fill: #242623;
  stroke: #242623;
`;

const StyledBakingIcon = styled(BakingIcon)`
  fill: #242623;
  stroke: #242623;
`;

const StyledCookingIcon = styled(CookingIcon)`
  fill: #242623;
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  min-width: 48px;
  background: #ffffff;
  border-radius: 5px;
  padding: 5px;
`;

const StyledText = styled.p`
  margin: 8px 0 0 5px;
  height: 35px;
  padding-left: 5px;
`;

const Span = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5px 0 0 0;
`;

export default function CardLegend() {
  return (
    <CardDiv>
      <Span>
        <StyledIcon>
          <StyledRawIcon />
        </StyledIcon>
        <StyledText>
          <b>Suited for raw use.</b> These plant products work great without
          cooking or baking.
        </StyledText>
      </Span>
      <Span>
        <StyledIcon>
          <StyledCoffeeIcon />
        </StyledIcon>
        <StyledText>
          <b>Recommended for coffee or tea.</b> These plant milks' mild tastes
          are a great fit for hot drinks.
        </StyledText>
      </Span>
      <Span>
        <StyledIcon>
          <StyledBakingIcon />
        </StyledIcon>
        <StyledText>
          <b> Recommended for baking.</b> These plant products work great in
          cake or pastries.
        </StyledText>
      </Span>
      <Span>
        <StyledIcon>
          <StyledCookingIcon />
        </StyledIcon>
        <StyledText>
          <b>Recommended for cooking.</b> These plant products work great in
          savory and cooked dishes.
        </StyledText>
      </Span>
    </CardDiv>
  );
}
