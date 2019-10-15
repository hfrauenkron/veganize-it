import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import BadgeButtonList from "../components/BadgeButtonList";
import { content } from "../api/content";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const filteredContent = content.filter(data =>
    data.toUpperCase().includes(searchValue.toUpperCase())
  );

  function handleSearch(value) {
    setSearchValue(value);
  }
  return (
    <WrapperDiv>
      <Header />
      <Searchbar onSearch={handleSearch} />
      <BadgeButtonList content={filteredContent} />
    </WrapperDiv>
  );
}
