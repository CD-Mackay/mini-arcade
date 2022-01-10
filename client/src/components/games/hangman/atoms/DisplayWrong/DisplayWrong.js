import React from 'react';
import WrongLetter from '../WrongLetter/WrongLetter';

import StyledDisplayWrong from './StyledDisplayWrong';

const DisplayWrong = () => {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const displayAlphabet = alphabet.map((element) => {
    return <WrongLetter letter={element} display={false} />
  })
  return (
    <StyledDisplayWrong>
      <p>I am DisplayWrong</p>
      {displayAlphabet}
    </StyledDisplayWrong>
  )
};

export default DisplayWrong;