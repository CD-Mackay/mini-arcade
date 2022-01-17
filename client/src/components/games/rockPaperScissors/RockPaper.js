import React, { useState } from 'react';
import ThrowSelect from './atoms/ThrowSelect/ThrowSelect';
import OpponentThrow from './atoms/OpponentThrow/OpponentThrow';

import StyledRockPaper from './StyledRockPaper';
import Button from '../../atoms/Button/Button';

const RockPaper = () => {

  const [input, setInput] = useState("");

  const handleGame = () => {
    console.log("game begins!")
    const moves = ["rock", "paper", "scissors"];
    const opponentsMove = moves[Math.floor(Math.random() * moves.length)];
    if ((input === "rock" && opponentsMove === "paper") || (input === "paper" && opponentsMove === "scissors") || (input === "scissors" && opponentsMove === "rock")) {
      console.log("you lose");
      return false;
     } else if ((input === "paper" && opponentsMove === "rock") || (input === "scissors" && opponentsMove === "paper") || (input === "rock" && opponentsMove === "scissors")) {
       console.log("you win");
       return true;
    } else {
      console.log("draw!")
      return "draw"
    }
  };



  return (
    <StyledRockPaper>
      <div>
        <ThrowSelect 
        input={input} 
        setInput={setInput} />
        <Button onClick={handleGame} message="Begin!" />
      </div>
      <OpponentThrow />
    </StyledRockPaper>
  )
};

export default RockPaper;