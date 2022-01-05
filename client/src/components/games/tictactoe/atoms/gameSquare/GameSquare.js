import React from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index}) => {
  return (
    <StyledGameSquare id={`game-square-${index}`}>
      <p>I am GameSquare</p>
    </StyledGameSquare>
  )
};

export default GameSquare;