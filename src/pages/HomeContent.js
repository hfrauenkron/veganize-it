import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BadgeButton from "../components/BadgeButton";
import { data } from "../api/data";
import AccordionList from "../components/AccordionList";
import CardLegend from "../components/CardLegend";

const WrapperDiv = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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

function HomeContent({ match, location, history }) {
  const item = data.find(
    item => item.name.toLowerCase() === match.params.itemName.toLowerCase()
  );

  return (
    <WrapperDiv>
      <StyledHeader />
      <StyledDiv>
        <BadgeButton light>{item.name.toUpperCase()}</BadgeButton>
        <AccordionList alt={item.alt} location={location} history={history} />
        <CardLegend />
      </StyledDiv>
    </WrapperDiv>
  );
}

export default HomeContent;
