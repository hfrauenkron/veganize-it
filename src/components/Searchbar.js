import React from "react";
import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";

const StyledSearchbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  height: 49px;
  width: 343px;
  box-shadow: 2px 2px 2px #00000029;
  padding-left: 5px;
  margin: 35px 0 20px 0;
  background: #ffffff;
`;

const StyledInput = styled.input`
  display: flex;
  justify-content: flex-start;
  ::placeholder {
    color: #bebebe;
  }
  :focus {
    outline: none;
  }
  font-size: 20px;
  padding-left: 10px;
  border: none;
  width: 290px;
  height: 39px;
`;

const StyledSearchIcon = styled.span`
  padding: 5px 15px 0 0;
`;

export default function Searchbar({ onSearch }) {
  function handleFilter(event) {
    const { value } = event.target;
    onSearch(value);
  }

  return (
    <StyledSearchbar>
      <StyledInput
        id="search"
        type="search"
        placeholder="What do you want to replace?"
        onChange={handleFilter}
      />
      <StyledSearchIcon>
        <SearchIcon />
      </StyledSearchIcon>
    </StyledSearchbar>
  );
}
