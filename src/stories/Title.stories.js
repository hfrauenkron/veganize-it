import React from "react";
import Title from "../components/Title";

export default {
  title: "Title"
};

export const HeaderTitle = () => <Title headerHeadline>VEGANIZE IT</Title>;
export const WelcomeTitle = () => <Title boldHeadline>VEGANIZE IT</Title>;

export const HomeTitle = () => <Title>HOME</Title>;
export const FavouritesTitle = () => <Title>FAVOURITES</Title>;
export const AccountTitle = () => <Title inactive>ACCOUNT</Title>;
export const AboutTitle = () => <Title>ABOUT</Title>;

export const SkipTitle = () => <Title link>SKIP</Title>;
export const StartTitle = () => <Title>START</Title>;
export const NameTitle = () => <Title>WHAT'S YOUR NAME?</Title>;
export const RegisterTitle = () => <Title link>REGISTER</Title>;
