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

/* Asset Imports */
import { GlobalStyle } from './GlobalStyles.js'
import StyledApp from './StyledApp.js'


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
          </Switch>
          <Footer />
      </StyledApp>
    </Router>
  )
};

export default App;