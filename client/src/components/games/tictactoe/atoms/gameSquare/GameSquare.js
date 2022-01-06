import React, { useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index, playerTurn, setPlayerTurn}) => {

  const [selected, setSelected] = useState(false);
  const [player, setPlayer] = useState(0);


 const handleSquareSelect = () => {
    setSelected(true);
    setPlayer(playerTurn);
    if (playerTurn == 1) {
      setPlayerTurn(2);
    } else {
      setPlayerTurn(1);
    }
  };

  return (
    <StyledGameSquare id={`game-square-${index}`} onClick={handleSquareSelect}>
      {selected && <p>{player == 1 ? "x" : "o"}</p>}
      
    </StyledGameSquare>
  )
};

export default GameSquare;