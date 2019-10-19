import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import LikeIcon from "../icons/LikeIcon";

const WrapperDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: medium;
  font-size: 20px;
  border: none;
  color: #242623;
  width: 100%;
`;

const StyledLikeCount = styled.span`
  padding-left: 5px;
  margin-left: 30px;
  font-size: 20;
  border: none;
`;

const jump = keyframes`
  from { transform: translate3d(0, 0, 0);}
    to { transform: translate3d(0, -25px, 0);}
`;

const JumpLike = styled.span`
  margin-left: 5px;
  z-index: 100;
  position: absolute;
  bottom: 0px;
  left: 0px;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #00000029);
  fill: #ffffff;
  stroke: #242623;
  ${props =>
    props.click
      ? css`
          animation: ${jump} 0.3s ease-in-out;
          animation-direction: alternate;
          animation-iteration-count: 1;
        `
      : css`
          animation: none;
        `}
`;

export default function Vote() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  function handleClickCount() {
    setClick(!click);
    setCount(count + 1);
  }

  return (
    <WrapperDiv>
      <JumpLike onClick={handleClickCount} click={click}>
        <LikeIcon />
      </JumpLike>
      <StyledLikeCount>{count}</StyledLikeCount>
    </WrapperDiv>
  );
}
