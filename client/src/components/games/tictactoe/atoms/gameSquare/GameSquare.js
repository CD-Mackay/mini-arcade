import React, { useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index}) => {

  const [selected, setSelected] = useState(false);
  const [player, setPlayer] = useState(0);

  return (
    <StyledGameSquare id={`game-square-${index}`}>
      <p>I am GameSquare</p>
    </StyledGameSquare>
  )
};

export default GameSquare;