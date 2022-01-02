/* Library Imports */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/* Component Imports */
import Home from 'pages/Home/Home';

/* Asset Imports */
import { GlobalStyle } from './GlobalStyles.js'
import StyledApp from './StyledApp.js'


const App = () => {
  return (
    <Router>
      <StyledApp>
          <GlobalStyle />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </StyledApp>
    </Router>
  )
};

export default App;