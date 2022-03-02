/* Library Imports */
import React from 'react';


/* Component Imports */
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
/* Asset Imports */
import StyledHeader from './StyledHeader';

const Header = () => {

  
  return (
    <StyledHeader>
      <div />
        <h1>The Mini Arcade</h1>
      <div id="button-wrapper">
        <Link to="/">
          <Button message="Return to Home" />
        </Link>
      </div>
    </StyledHeader>
  )
};

export default Header;