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
      <h1>Behold! The mini Arcade!</h1>
      <Link to="/">
        <Button message="Return to Home" />
      </Link>
    </StyledHeader>
  )
};

export default Header;