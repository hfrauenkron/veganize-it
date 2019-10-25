import React from "react";
import styled from "styled-components";
import BakingIcon from "../icons/BakingIcon";
import CookingIcon from "../icons/CookingIcon";
import CoffeeIcon from "../icons/CoffeeIcon";
import RawIcon from "../icons/RawIcon";
import PropTypes from "prop-types";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRawIcon = styled(RawIcon)`
  margin: 8px 3px 0px 6px;
  stroke: ${props => (props.raw ? "#242623" : "#bebebe")};
`;

const StyledCoffeeIcon = styled(CoffeeIcon)`
  margin: 5px 4px;
  fill: ${props => (props.coffee ? "#242623" : "#bebebe")};
  stroke: ${props => (props.coffee ? "#242623" : "#bebebe")};
`;
const StyledBakingIcon = styled(BakingIcon)`
  margin: 5px 3px 10px 5px;
  fill: ${props => (props.baking ? "#242623" : "#bebebe")};
  stroke: ${props => (props.baking ? "#242623" : "#bebebe")};
`;

const StyledCookingIcon = styled(CookingIcon)`
  margin: 5px 3px 3px 5px;
  fill: ${props => (props.cooking ? "#242623" : "#bebebe")};
`;

export default function UseIconsMilk({ coffee, baking, cooking, raw }) {
  return (
    <WrapperDiv>
      <StyledRawIcon raw={raw} />
      <StyledCoffeeIcon coffee={coffee} />
      <StyledBakingIcon baking={baking} />
      <StyledCookingIcon cooking={cooking} />
    </WrapperDiv>
  );
}

UseIconsMilk.propTypes = {
  assigned: PropTypes.bool
};
