// Library Imports
import React from 'react';

// CSS Imports
import StyledWrongLetter from './StyledWrongLetter';

const WrongLetter = ({letter, display}) => {


  /**
   * Displays individual incorrect guesses in Hangman game
   */
  return (
    <StyledWrongLetter display={display}>
      <p>{letter}</p>
    </StyledWrongLetter>
  )
};

export default WrongLetter;