import React, { useEffect, useState } from 'react';

import StyledGameSquare from './StyledGameSquare';

const GameSquare = ({index, setSquareSelected, value}) => {


  const [opacity, setOpacity] = useState(0);

 const handleSquareSelect = () => {
   if (value === "") {
    setSquareSelected(index);
   }
  };

  useEffect(() => {
    console.log("useeffect")
    if (value !== "") {
      setOpacity(1);
    }
  }, [value]);
  
  return (
    <StyledGameSquare id={`game-square-${index}`} onClick={handleSquareSelect} opacity={opacity}>
      {value && <p>{value === 1 ? "x" : "o"}</p>}
      <span>{index}</span>
    </StyledGameSquare>
  )
};

export default GameSquare;