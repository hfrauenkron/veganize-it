import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BadgeButton from "../components/BadgeButton";
import { data } from "../api/data";
import AccordionList from "../components/AccordionList";
import CardLegend from "../components/CardLegend";

const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv = styled.span`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledHeader = styled(Header)`
  position: absolute;
`;

export default function Content({ match }) {
  const item = data.find(item => item.name === match.params.itemName);

  return (
    <WrapperDiv>
      <StyledHeader />
      <StyledDiv>
        <BadgeButton light>{item.name.toUpperCase()}</BadgeButton>
        <AccordionList alt={item.alt} />
        <CardLegend />
      </StyledDiv>
    </WrapperDiv>
  );
}
