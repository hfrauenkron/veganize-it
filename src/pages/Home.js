import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import BadgeButtonList from "../components/BadgeButtonList";
import { data } from "../api/data";

const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  z-index: 99;
  position: relative;
`;

const StyledSearchbar = styled(Searchbar)`
  @media (max-width: 390px) {
    width: 50%;
    height: 10%;
  }
`;

export default function Home({ userName }) {
  const [searchValue, setSearchValue] = useState("");

  // const [data, setData] = React.useState([]);
  // React.useEffect(() => {
  //   getData().then(fetchedData => {
  //     setData(fetchedData);
  //   });
  // });

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <WrapperDiv>
      <StyledHeader showBubble children={`Welcome, ${userName}!`} />
      <StyledSearchbar onSearch={handleSearch} />
      <BadgeButtonList data={filteredData} />
    </WrapperDiv>
  );
}
