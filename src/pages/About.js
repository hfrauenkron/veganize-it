import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Title from "../components/Title";
import Card from "../components/Card";

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function About() {
  return (
    <WrapperDiv>
      <Header />
      <Title headline>ABOUT</Title>
      <Card>
        This app was created to provide simple access to the many and versatile
        uses of plant-based foods and the ways in which they can substitute
        animal-products. <br />
        Plant-foods are healthy, widely available and easily prepared, yet many
        people find it challenging to incorporate them into their meal plans,
        coming from a conventional, animal-based diet. <br />
        The massive amounts of animal products consumed in modern societies have
        devastating effects on the health of humans and the planet. It's time to
        make a change - and VEGANIZE IT is here to make it simple, happy and
        delicious.
      </Card>
      <Title headline>CREDITS</Title>
      <Card>
        <p>
          Credits go to the wonderful&nbsp;
          <a
            style={{ display: "inline" }}
            href="https://www.simplehappykitchen.com/"
          >
            Simple Happy Kitchen
          </a>
          , who kindly lent some of their icons to this app and its cause.
        </p>
      </Card>
      <Title headline>DISCLAIMER</Title>
      <Card>
        If you require any more information or have any questions about our
        site's disclaimer, please feel free to contact us by email at
        h.frauenkron@mail.de
        <br />
        <br />
        All the information on this website is published in good faith and for
        general information purpose only. VEGANIZE IT does not make any
        warranties about the completeness, reliability and accuracy of this
        information. Any action you take upon the information you find on this
        website, is strictly at your own risk. VEGANIZE IT will not be liable
        for any losses and/or damages in connection with the use of our website.
        <br />
        <br />
        From our website, you can visit other websites by following hyperlinks
        to such external sites. While we strive to provide only quality links to
        useful and ethical websites, we have no control over the content and
        nature of these sites. These links to other websites do not imply a
        recommendation for all the content found on these sites. Site owners and
        content may change without notice and may occur before we have the
        opportunity to remove a link which may have gone 'bad'.
        <br />
        <br />
        Consent
        <br />
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
        <br />
        Update
        <br />
        Should we update, amend or make any changes to this document, those
        changes will be prominently posted here.
      </Card>
    </WrapperDiv>
  );
}
