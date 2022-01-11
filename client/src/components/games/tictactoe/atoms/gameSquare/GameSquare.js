import React, { useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index, playerTurn, setPlayerTurn, setSquareSelected, value}) => {

  const [selected, setSelected] = useState(false);



 const handleSquareSelect = () => {
   if (!selected) {
    setSquareSelected(index);
    setSelected(playerTurn);
   }
  };

  return (
    <StyledGameSquare id={`game-square-${index}`} onClick={handleSquareSelect}>
      {selected && <p>{selected == 1 ? "x" : "o"}</p>}
    </StyledGameSquare>
  )
};

export default GameSquare;