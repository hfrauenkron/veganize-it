import React from "react";
import styled from "styled-components";
import SearchIcon from "../icons/SearchIcon";
import PropTypes from "prop-types";

const StyledSearchbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  min-height: 49px;
  min-width: 343px;
  box-shadow: 2px 2px 2px #00000029;
  margin: 35px 0 20px 0;
  background: #ffffff;
  @media (max-width: 390px) {
    width: 50px;
  }
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
  font-size: 1.2rem;
  padding-left: 10px;
  margin-left: 5px;
  border: none;
  width: 300px;
  height: 39px;
  -webkit-appearance: none;
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
        autoComplete="off"
        onChange={handleFilter}
      />
      <StyledSearchIcon>
        <SearchIcon />
      </StyledSearchIcon>
    </StyledSearchbar>
  );
}

Searchbar.propTypes = {
  onSearch: PropTypes.func
};
