import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import BadgeButtonList from "../components/BadgeButtonList";
// import { getData } from "../api/getData";
import { data } from "../api/data";
import SpeechBubble from "../components/SpeechBubble";

const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeader = styled(Header)`
  position: relative;
`;

const StyledSpeechBubble = styled.span`
  z-index: 100;
  position: absolute;
  left: 92px;
  top: 47px;
  transform: rotate(5deg);
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
      <StyledHeader />
      <StyledSpeechBubble>
        <SpeechBubble userName={userName} />
      </StyledSpeechBubble>
      <Searchbar onSearch={handleSearch} />
      <BadgeButtonList data={filteredData} />
    </WrapperDiv>
  );
}
