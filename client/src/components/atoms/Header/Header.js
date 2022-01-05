/* Library Imports */
import React from 'react';


/* Component Imports */
import Button from '../Button/Button';
/* Asset Imports */
import StyledHeader from './StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Behold! The mini Arcade!</h1>
      <Button message="Back to Home" />
    </StyledHeader>
  )
};

export default Header;