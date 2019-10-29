import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import HomeContent from "./pages/HomeContent";
import {
  getFavouritesFromStorage,
  setFavouritesToStorage,
  getUserNameFromStorage,
  setUserNameToStorage
} from "./api/storage";
import { data } from "./api/data";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  const [favourites, setFavourites] = useState(getFavouritesFromStorage());
  const [userName, setUserName] = useState(getUserNameFromStorage());

  useEffect(() => {
    setFavouritesToStorage(favourites);
  }, [favourites]);

  useEffect(() => {
    setUserNameToStorage(userName);
  }, [userName]);

  const handleRemoveFavourite = id => {
    setFavourites(favourites.filter(favourite => favourite.id !== id));
  };

  return (
    <Container>
      <GlobalStyles />
      <Router>
        <Route
          path="/"
          exact
          component={() => (
            <Welcome userName={userName} setUserName={setUserName} />
          )}
        />
        <Route
          path="/home"
          exact
          component={() => <Home userName={userName} />}
        />

        <Route
          path="/home/:itemName"
          exact
          component={() => (
            <HomeContent
              userName={userName}
              setFavourites={setFavourites}
              favourites={favourites}
            />
          )}
        />
        <Route
          path="/favourites"
          component={() => (
            <Favourites
              data={data}
              favouriteData={favourites}
              handleRemoveFavourite={handleRemoveFavourite}
            />
          )}
        />
        <Route path="/about" component={About} />
      </Router>
    </Container>
  );
}

export default App;
