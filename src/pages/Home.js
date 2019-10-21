import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import BadgeButtonList from "../components/BadgeButtonList";
import BadgeButton from "../components/BadgeButton";
import { data } from "../api/data";
import { Route, Switch, useHistory } from "react-router-dom";
import AccordionList from "../components/AccordionList";

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
  justify-content: center;
`;

const StyledHeader = styled(Header)`
  position: absolute;
`;

export default function Home({ item, mappedAlt }) {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleSearch(value) {
    setSearchValue(value);
  }
  function handleSelect(item) {
    history.push(`/${item.name}`);
  }

  return (
    <WrapperDiv>
      <StyledHeader />
      <Switch>
              
        <Route exact path="/home">
                
          <Searchbar onSearch={handleSearch} />
          <BadgeButtonList data={filteredData} onSelect={handleSelect} />
           
        </Route>
        <Route exact path="/home/content">
          <StyledDiv>
            <BadgeButton light>MILK</BadgeButton>
            <AccordionList item={mappedAlt} />
          </StyledDiv>
        </Route>
      </Switch>
    </WrapperDiv>
  );
}
{
  /* {data.map(item => (
              <BadgeButton>{item.alt.toUpperCase()}</BadgeButton>
            ))}*/
}
