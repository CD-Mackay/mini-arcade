import React, { useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index, playerTurn, setPlayerTurn, setSquareSelected}) => {

  const [selected, setSelected] = useState(false);


 const handleSquareSelect = () => {
   setSquareSelected(index);
   setSelected(playerTurn);
   if (playerTurn == 1) {
     setPlayerTurn(2);
   } else {
     setPlayerTurn(1);
   }
  };

  return (
    <StyledGameSquare id={`game-square-${index}`} onClick={handleSquareSelect}>
      {selected && <p>{selected == 1 ? "x" : "o"}</p>}
    </StyledGameSquare>
  )
};

export default GameSquare;