import React from "react";
import styled, { keyframes } from "styled-components";
import FavouriteIcon from "../icons/FavouriteIcon";

export const float = keyframes`
 0% {
        margin-top: 100px;
    }
    100% {
        margin-top: -100%;
    }
    `;

export const sideWays = keyframes` 
  0% { 
      margin-left:0px;
  }
  100% { 
      margin-left:50px;
  }
`;

const FloatingHeart1 = styled.span`
  z-index: 1000;
  position: relative;
  fill: #e44346;
  animation: 20s ${float} linear infinite,
    ${sideWays} 3s ease-in-out infinite alternate;
  -webkit-animation: 20s ${float} linear infinite,
    ${sideWays} 3s ease-in-out infinite alternate;
  left: -5%;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
  opacity: 90%;
`;

const FloatingHeart2 = styled.span`
  z-index: 1000;
  position: relative;
  fill: #e44346;
  animation: ${float} linear infinite,
    ${sideWays} 5s ease-in-out infinite alternate;
  -webkit-animation: ${float} linear infinite,
    ${sideWays} 5s ease-in-out infinite alternate;
  left: 5%;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
  opacity: 90%;
`;

const FloatingHeart3 = styled.span`
  z-index: 1000;
  position: relative;
  fill: #e44346;
  animation: 20s ${float} linear infinite,
    ${sideWays} 2s ease-in-out infinite alternate;
  -webkit-animation: 20s ${float} linear infinite,
    ${sideWays} 2s ease-in-out infinite alternate;
  left: 10%;
  transform: scale(0.9);
  -webkit-transform: scale(0.9);
  opacity: 90%;
`;

export default function FloatingHearts() {
  return (
    <>
      <FloatingHeart1>
        <FavouriteIcon />
      </FloatingHeart1>
      <FloatingHeart2>
        <FavouriteIcon />
      </FloatingHeart2>
      <FloatingHeart3>
        <FavouriteIcon />
      </FloatingHeart3>
    </>
  );
}
