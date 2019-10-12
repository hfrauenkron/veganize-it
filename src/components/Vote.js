import React from "react";
import styled, { css } from "styled-components";
import LikeIcon from "../icons/LikeIcon";

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: medium;
  font-size: 20px;
  border: none;
  color: #242623;
  padding: 0px;
  /* margin: auto; */
`;

const StyledLikeIcon = styled(LikeIcon)`
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #00000029);
  ${props =>
    props.clicked
      ? css`
          fill: #242623;
          stroke: none;
        `
      : css`
          fill: #ffffff;
          stroke: #242623;
        `}
`;

const StyledLikeCount = styled.span`
  padding-left: 5px;
  font-size: 20;
  border: none;
`;

// let clicks = "0";
// const button = (document.querySelector("#countButton").value = ++clicks);
// const showCount = document.querySelector("#showCount");
// window.onload = function() {
//   button.addEventListener("click", event => {
//     showCount.innerHTML = `Click count: ${event.details}`;
//   });
// };

export default function Vote({ clicked }) {
  return (
    <WrapperDiv>
      <StyledLikeIcon clicked={clicked} type="button" id="countButton" />
      <StyledLikeCount id="showCount" value="0">
        0
      </StyledLikeCount>
    </WrapperDiv>
  );
}
