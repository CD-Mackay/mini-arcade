
// Library Imports
import React from 'react';

// Component Imports
import WrongLetter from '../WrongLetter/WrongLetter';

// CSS Imports
import StyledDisplayWrong from './StyledDisplayWrong';

const DisplayWrong = ({wrong}) => {

  const displayLetters = wrong.map((element, index) => {
    return <WrongLetter key={index} letter={element} />
  })

  /**
   * Displays incorrect guesses in ongoing game of Hangman
   */
  return (
    <StyledDisplayWrong>
      <h3>Wrong Answers</h3>
      <div>
      {displayLetters}
      </div>
    </StyledDisplayWrong>
  )
};

export default DisplayWrong;