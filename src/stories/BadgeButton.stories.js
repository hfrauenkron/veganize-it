import React from "react";
import BadgeButton from "../components/BadgeButton";

export default {
  title: "BadgeButton"
};

export const BadgeButtonLight = () => <BadgeButton light>MILK</BadgeButton>;
export const BadgeButtonDark = () => <BadgeButton>SOY MILK</BadgeButton>;
