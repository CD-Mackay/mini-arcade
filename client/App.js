/* Library Imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Component Imports */
import Home from 'pages/Home/Home';
import Tic from './src/components/games/tictactoe/Tic.js';
import Header from './src/components/atoms/Header/Header.js';
import Footer from './src/components/atoms/Footer/Footer.js';
import ConnectFour from './src/components/games/ConnectFour/ConnectFour.js';
import Tutorial from './src/components/atoms/Tutorial/Tutorial.js';

/* Asset Imports */
import { GlobalStyle } from './GlobalStyles.js'
import StyledApp from './StyledApp.js'
import Hangman from './src/components/games/hangman/Hangman.js';
import RockPaper from './src/components/games/rockPaperScissors/RockPaper.js';


const App = () => {
  return (
    <Router>
      <StyledApp>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/tictactoe">
              <Tic />
            </Route>
            <Route exact path="/hangman">
              <Hangman />
            </Route>
            <Route exact path="/rockpaperscissors" >
              <RockPaper />
            </Route>
            <Route exact path="/connectfour">
              <ConnectFour />
            </Route>
            <Route path="/:game/tutorial">
              <Tutorial game=":game"/>
            </Route>
          </Switch>
          <Footer />
      </StyledApp>
    </Router>
  )
};

export default App;