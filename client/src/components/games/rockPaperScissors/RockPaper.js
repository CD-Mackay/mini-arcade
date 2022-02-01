import React, { useState } from 'react';
import ThrowSelect from './atoms/ThrowSelect/ThrowSelect';
import OpponentThrow from './atoms/OpponentThrow/OpponentThrow';

import StyledRockPaper from './StyledRockPaper';
import Button from '../../atoms/Button/Button';
import RenderThrow from './atoms/RenderThrow/RenderThrow';

const RockPaper = () => {

  const [input, setInput] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [winner, setWinner] = useState("");
  const [opponentTurn, setOpponentTurn] = useState("");

  const handleRenderGamePlay = () => {
    setCountDown(3);
    setTimeout(() => {
      setCountDown(2);
    }, 1000);
    setTimeout(() =>{
      setCountDown(1);
    }, 2000);
    setTimeout(() => {
      setCountDown(0);
      handleGame();
    }, 3000)
  };

  const handleGame = () => {
    const moves = ["rock", "paper", "scissors"];
    const opponentsMove = moves[Math.floor(Math.random() * moves.length)];
    setOpponentTurn(opponentsMove);
    if ((input === "rock" && opponentsMove === "paper") || (input === "paper" && opponentsMove === "scissors") || (input === "scissors" && opponentsMove === "rock")) {
      console.log("you lose");
      setWinner("computer")
      return false;
     } else if ((input === "paper" && opponentsMove === "rock") || (input === "scissors" && opponentsMove === "paper") || (input === "rock" && opponentsMove === "scissors")) {
       console.log("you win");
       setWinner("human")
       return true;
    } else {
      console.log("draw!");
      setWinner("draw");
      return "draw"
    }
  };



  return (
    <StyledRockPaper>
      <div>
        <ThrowSelect 
        input={input} 
        setInput={setInput} />
        <Button onClick={handleRenderGamePlay} message="Begin!" />
      </div>
      <div id="turn-display">
      <RenderThrow move={input} />
      <OpponentThrow timer={countDown} winner={winner} display={opponentTurn} />
      </div>
    </StyledRockPaper>
  )
};

export default RockPaper;