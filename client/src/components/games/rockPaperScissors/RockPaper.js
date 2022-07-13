import React, { useEffect, useState } from "react";
import ThrowSelect from "./atoms/ThrowSelect/ThrowSelect";
import OpponentThrow from "./atoms/OpponentThrow/OpponentThrow";

import StyledRockPaper from "./StyledRockPaper";
import Button from "../../atoms/Button/Button";
import RenderThrow from "./atoms/RenderThrow/RenderThrow";
import ScoreKeeper from "../../atoms/ScoreKeeper/ScoreKeeper";
import OpponentNames from "../../../utilities/OpponentNames";
import UpdateRecords from "../../../utilities/UpdateRecords";

const RockPaper = () => {
  const [input, setInput] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [error, setError] = useState("");
  const [winner, setWinner] = useState("");
  const [opponentTurn, setOpponentTurn] = useState("");
  const [record, setRecord] = useState({
    player_one: 0,
    player_two: 0,
    draw: 0,
  });
  const [opponentName, setOpponentName] = useState("");

  const { robitNames, pickRobotName } = OpponentNames;
  const { handleUpdateRecord } = UpdateRecords;

  useEffect(() => {
    setOpponentName(pickRobotName(robitNames));
  }, []);

  const handleRenderGamePlay = () => {
    setOpponentTurn("");
    setWinner("");
    if (input === "") {
      setError("No Move Selected");
      return;
    }
    setCountDown(3);
    setTimeout(() => {
      setCountDown(2);
    }, 1000);
    setTimeout(() => {
      setCountDown(1);
    }, 2000);
    setTimeout(() => {
      setCountDown(0);
      handleGame();
    }, 3000);
  };

  const handleGame = () => {
    const moves = ["rock", "paper", "scissors"];
    const opponentsMove = moves[Math.floor(Math.random() * moves.length)];
    setOpponentTurn(opponentsMove);
    if (
      (input === "rock" && opponentsMove === "paper") ||
      (input === "paper" && opponentsMove === "scissors") ||
      (input === "scissors" && opponentsMove === "rock")
    ) {
      setWinner("computer");
      setRecord(handleUpdateRecord("player_two", record));
      return false;
    } else if (
      (input === "paper" && opponentsMove === "rock") ||
      (input === "scissors" && opponentsMove === "paper") ||
      (input === "rock" && opponentsMove === "scissors")
    ) {
      setWinner("human");
      setRecord(handleUpdateRecord("player_one", record));
      return true;
    } else {
      setWinner("draw");
      setRecord(handleUpdateRecord("draw", record));
      return "draw";
    }
  };

  return (
    <StyledRockPaper>
      <div id="input-wrapper">
        <ThrowSelect input={input} setInput={setInput} setError={setError} />
        <Button onClick={handleRenderGamePlay} message="Begin!" />
      </div>
      <div id="turn-display">
        <RenderThrow move={input} />
        <OpponentThrow
          timer={countDown}
          winner={winner}
          display={opponentTurn}
        />
        <p>{error}</p>
      </div>
      <ScoreKeeper name={opponentName} record={record} />
    </StyledRockPaper>
  );
};

export default RockPaper;
