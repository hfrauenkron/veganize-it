import React from "react";
import styled from "styled-components";
import BakingIcon from "../icons/BakingIcon";
import CookingIcon from "../icons/CookingIcon";
import CoffeeIcon from "../icons/CoffeeIcon";
import PropTypes from "prop-types";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCoffeeIcon = styled(CoffeeIcon)`
  margin: 5px;
  fill: ${props => (props.assigned ? "#242623" : "#bebebe")};
  stroke: ${props => (props.assigned ? "#242623" : "#bebebe")};
`;
const StyledBakingIcon = styled(BakingIcon)`
  margin: 5px 5px 10px 6px;
  fill: ${props => (props.assigned ? "#242623" : "#bebebe")};
  stroke: ${props => (props.assigned ? "#242623" : "#bebebe")};
`;

const StyledCookingIcon = styled(CookingIcon)`
  margin: 5px 5px 3px 6px;
  fill: ${props => (props.assigned ? "#242623" : "#bebebe")};
`;

export default function UseIcons({ assigned }) {
  return (
    <WrapperDiv>
      <StyledCoffeeIcon assigned={assigned} />
      <StyledBakingIcon assigned={assigned} />
      <StyledCookingIcon assigned={assigned} />
    </WrapperDiv>
  );
}

UseIcons.propTypes = {
  assigned: PropTypes.bool
};
