import React, { useEffect, useState } from 'react';
import ThrowSelect from './atoms/ThrowSelect/ThrowSelect';
import OpponentThrow from './atoms/OpponentThrow/OpponentThrow';

import StyledRockPaper from './StyledRockPaper';
import Button from '../../atoms/Button/Button';
import RenderThrow from './atoms/RenderThrow/RenderThrow';
import ScoreKeeper from '../../atoms/ScoreKeeper/ScoreKeeper';
import OpponentNames from '../../../utilities/OpponentNames';

const RockPaper = () => {

  const [input, setInput] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [winner, setWinner] = useState("");
  const [opponentTurn, setOpponentTurn] = useState("");
  const [record, setRecord] = useState({player_one: 0, player_two: 0, draw: 0});
  const [opponentName, setOpponentName] = useState("");

  const { robitNames, pickRobotName } = OpponentNames;

  useEffect(() => {
    setOpponentName(pickRobotName(robitNames));
  }, []);

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

  const handleUpdateRecord = (winner) => {
    let newRecord = {...record};
    newRecord[winner]++;
    setRecord(newRecord);
  };

  const handleGame = () => {
    const moves = ["rock", "paper", "scissors"];
    const opponentsMove = moves[Math.floor(Math.random() * moves.length)];
    setOpponentTurn(opponentsMove);
    if ((input === "rock" && opponentsMove === "paper") || (input === "paper" && opponentsMove === "scissors") || (input === "scissors" && opponentsMove === "rock")) {
      setWinner("computer");
      handleUpdateRecord("player_two");
      return false;
     } else if ((input === "paper" && opponentsMove === "rock") || (input === "scissors" && opponentsMove === "paper") || (input === "rock" && opponentsMove === "scissors")) {
       setWinner("human");
       handleUpdateRecord("player_one");
       return true;
    } else {
      setWinner("draw");
      handleUpdateRecord("draw");
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
      <ScoreKeeper name={opponentName} record={record} />
    </StyledRockPaper>
  )
};

export default RockPaper;