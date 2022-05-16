/* Library Imports */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Component Imports */
import Home from "pages/Home/Home";
import Tic from "./src/components/games/tictactoe/Tic.js";
import Header from "./src/components/atoms/Header/Header.js";
import Footer from "./src/components/atoms/Footer/Footer.js";
import ConnectFour from "./src/components/games/ConnectFour/ConnectFour.js";
import Tutorial from "./src/components/atoms/Tutorial/Tutorial.js";
import TutorialHeader from "./src/components/atoms/TutorialHeader/TutorialHeader.js";
import Layout from "./src/components/atoms/Layout/Layout.js";
import Snake from "./src/components/games/snake/Snake.js";

/* Asset Imports */
import { GlobalStyle } from "./GlobalStyles.js";
import StyledApp from "./StyledApp.js";
import Hangman from "./src/components/games/hangman/Hangman.js";
import RockPaper from "./src/components/games/rockPaperScissors/RockPaper.js";
import Sidebar from "./src/components/atoms/sidebar/Sidebar.js";

const App = () => {
  return (
    <Router>
      <StyledApp>
        <GlobalStyle />
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tictactoe">
              <Tic />
              <TutorialHeader game="tictactoe" />
            </Route>
            <Route exact path="/hangman">
              <Hangman />
              <TutorialHeader game="hangman" />
            </Route>
            <Route exact path="/rockpaperscissors">
              <RockPaper />
              <TutorialHeader game="rockpaperscissors" />
            </Route>
            <Route exact path="/connectfour">
              <ConnectFour />
              <TutorialHeader game="connectfour" />
            </Route>
            <Route exact path="/snake">
              <Snake />
              <TutorialHeader game="snake" />
            </Route>
            <Route path="/:game/tutorial">
              <Tutorial />
              <TutorialHeader />
            </Route>
          </Switch>
          <Sidebar />
        </Layout>
        <Footer />
      </StyledApp>
    </Router>
  );
};

export default App;
