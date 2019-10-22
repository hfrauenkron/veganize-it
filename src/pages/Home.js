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
  position: absolute;
`;

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  // let history = useHistory();

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  function handleSearch(value) {
    setSearchValue(value);
  }

  return (
    <WrapperDiv>
      <StyledHeader />
      <Searchbar onSearch={handleSearch} />
      <BadgeButtonList data={filteredData} />
    </WrapperDiv>
  );
}
// {data[0].name.toUpperCase()}

// return (
//   <WrapperDiv>
//     <StyledHeader />
//     <Switch>
//       <Route exact path="/home">
//         <Searchbar onSearch={handleSearch} />
//         <BadgeButtonList data={filteredData} />
//       </Route>
//       <Route path="/home/:itemName">
//         <StyledDiv>
//           <BadgeButton i={item} light>
//             {item.name}
//           </BadgeButton>
//           <AccordionList />
//         </StyledDiv>
//       </Route>
//     </Switch>
//   </WrapperDiv>
// );
