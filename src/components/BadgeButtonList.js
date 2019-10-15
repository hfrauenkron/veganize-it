import React from "react";
import styled from "styled-components";
import BadgeButton from "./BadgeButton";

const BadgeButtonSection = styled.section`
  display: flex;
  flex-direction: row;
  width: 370px;
  height: auto;
  padding-left: 8px;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
`;

export default function BadgeButtonList({ content }) {
  return (
    <BadgeButtonSection>
      {content.map(item => {
        return (
          <BadgeButton list light content={content}>
            {item.toUpperCase()}
          </BadgeButton>
        );
      })}
    </BadgeButtonSection>
  );
}
