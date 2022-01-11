import React, { useEffect, useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index, setSquareSelected, value}) => {


 const handleSquareSelect = () => {
   if (value === "") {
    setSquareSelected(index);
   }
  };

  return (
    <StyledGameSquare id={`game-square-${index}`} onClick={handleSquareSelect}>
      {value !== "" && <p>{value == 1 ? "x" : "o"}</p>}
    </StyledGameSquare>
  )
};

export default GameSquare;