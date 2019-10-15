import React from "react";
import styled from "styled-components";
import { content } from "../api/content";
import BadgeButton from "./BadgeButton";

const BadgeButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 352px;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  flex-flow: wrap;
`;

export default function BadgeButtonList() {
  return (
    <BadgeButtonSection>
      {content.map(content => {
        return (
          <BadgeButton list light>
            {content.name}
          </BadgeButton>
        );
      })}
    </BadgeButtonSection>
  );
}
