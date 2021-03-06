import React from 'react';
import WrongLetter from '../WrongLetter/WrongLetter';

import StyledDisplayWrong from './StyledDisplayWrong';

const DisplayWrong = ({wrong}) => {

  const displayLetters = wrong.map((element, index) => {
    return <WrongLetter key={index} letter={element} />
  })
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