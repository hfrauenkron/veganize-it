import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import BakingIcon from "../icons/BakingIcon";
import CookingIcon from "../icons/CookingIcon";
import RawIcon from "../icons/RawIcon";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledRawIcon = styled(RawIcon)`
  margin: 8px 1px 0px 6px;
  stroke: ${props => (props.raw ? "#242623" : "#bebebe")};
`;

const StyledBakingIcon = styled(BakingIcon)`
  margin: 5px 1px 10px 5px;
  fill: ${props => (props.baking ? "#242623" : "#bebebe")};
  stroke: ${props => (props.baking ? "#242623" : "#bebebe")};
`;

const StyledCookingIcon = styled(CookingIcon)`
  margin: 5px 3px 3px 5px;
  fill: ${props => (props.cooking ? "#242623" : "#bebebe")};
`;

export default function UseIcons({ baking, cooking, raw }) {
  return (
    <WrapperDiv>
      <StyledRawIcon raw={raw} />
      <StyledBakingIcon baking={baking} />
      <StyledCookingIcon cooking={cooking} />
    </WrapperDiv>
  );
}

UseIcons.propTypes = {
  baking: PropTypes.bool,
  cooking: PropTypes.bool,
  raw: PropTypes.bool
};
