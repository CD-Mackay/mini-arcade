/* Library Imports */
import React from 'react';


/* Component Imports */
import Button from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';
/* Asset Imports */
import StyledHeader from './StyledHeader';

const Header = () => {

  let location = useLocation();

  console.log(location);

  return (
    <StyledHeader location={location.pathname}>
     {location.pathname !== "/" && <div />}
        <h1>The Mini Arcade</h1>
      {location.pathname !== "/" && 
      <div id="button-wrapper">
        <Link to="/">
          <Button message="Return to Home" />
        </Link>
      </div>}
    </StyledHeader>
  )
};

export default Header;