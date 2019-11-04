import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 379px;
  height: 100%;
  border: none;
  background: #ffffff;
  box-shadow: 2px -2px 2px #00000029;
  border-radius: 10px;
  margin: 0 20px 0px;
  padding: 20px;
`;

export default function Card({ children }) {
  return <CardDiv>{children}</CardDiv>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};
