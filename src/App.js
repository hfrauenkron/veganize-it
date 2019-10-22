import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import Content from "./pages/Content";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/home" exact component={Home} />
        <Route path="/home/:itemName" component={Content} />
        <Route path="/favourites" exact component={Favourites} />
        <Route path="/about" exact component={About} />
      </Router>
    </Container>
  );
}

export default App;
