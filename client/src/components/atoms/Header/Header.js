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
      <div>
        <h1>Behold! The mini Arcade!</h1>
      </div>
      <div id="button-wrapper">
        <Link to="/">
          <Button message="Return to Home" />
        </Link>
      </div>
    </StyledHeader>
  )
};

export default Header;