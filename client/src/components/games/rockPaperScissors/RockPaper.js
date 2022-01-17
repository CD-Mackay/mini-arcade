import React, { useState } from 'react';
import ThrowSelect from './atoms/ThrowSelect/ThrowSelect';
import OpponentThrow from './atoms/OpponentThrow/OpponentThrow';

import StyledRockPaper from './StyledRockPaper';

const RockPaper = () => {

  const [input, setInput] = useState("");
  const [opponentMove, setOpponentMove] = useState("");

  const handleGame = () => {
    if ((input === "rock" && opponentMove === "paper") || (input === "paper" && opponentMove === "scissors"))
  };



  return (
    <StyledRockPaper>
      <ThrowSelect 
      input={input} 
      setInput={setInput} />
      <OpponentThrow />
    </StyledRockPaper>
  )
};

export default RockPaper;