import React from "react";
import styled from "styled-components";
import BadgeButton from "./BadgeButton";
import { Link } from "react-router-dom";

const BadgeButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 370px;
  height: auto;
  padding-left: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #242623;
`;

export default function BadgeButtonList({ data }) {
  return (
    <BadgeButtonSection>
      {data.map(item => {
        return (
          <BadgeButton list light key={item.id}>
            <StyledLink to={`/home/${item.name.toLowerCase()}`}>
              {item.name.toUpperCase()}
            </StyledLink>
          </BadgeButton>
        );
      })}
    </BadgeButtonSection>
  );
}
