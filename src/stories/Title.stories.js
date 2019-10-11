import React from "react";
import Title from "../components/Title";

export default {
  title: "Title"
};

export const HeaderTitle = () => <Title active>VEGANIZE IT</Title>;

export const HomeTitle = () => <Title>HOME</Title>;
export const FavouritesTitle = () => <Title>FAVOURITES</Title>;
export const AccountTitle = () => <Title>ACCOUNT</Title>;
export const AboutTitle = () => <Title>ABOUT</Title>;

export const HomeLinkTitle = () => <Title link>HOME</Title>;
// export const FavouritesLinkTitle = () => <Title link>FAVOURITES</Title>;
// export const AccountLinkTitle = () => <Title link>ACCOUNT</Title>;
// export const AboutLinkTitle = () => <Title link>ABOUT</Title>;

export const SkipTitle = () => <Title link>SKIP</Title>;
export const LoginTitle = () => <Title>LOGIN/</Title>;
export const RegisterTitle = () => <Title link>REGISTER</Title>;
