// Library Imports
import React, { useEffect, useState, useContext } from "react";

// Component Imports
import ThrowSelect from "./atoms/ThrowSelect/ThrowSelect";
import OpponentThrow from "./atoms/OpponentThrow/OpponentThrow";
import Button from "../../atoms/Button/Button";
import RenderThrow from "./atoms/RenderThrow/RenderThrow";
import ScoreKeeper from "../../atoms/ScoreKeeper/ScoreKeeper";
import { RockPaperContext } from "../../../contexts/rockpaperscissors/RockPaperContext";

// Asset Imports
import OpponentNames from "../../../utilities/OpponentNames";
import UpdateRecords from "../../../utilities/UpdateRecords";

// CSS Imports
import StyledRockPaper from "./StyledRockPaper";


const RockPaper = () => {
  const {
    input,
    setInput,
    winner,
    opponentTurn,
    countDown,
    error,
    setError,
    handleRenderGamePlay
  } = useContext(RockPaperContext);

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

  useEffect(() => {
    if (winner === "computer") {
      setRecord(handleUpdateRecord("player_two", record));
    } else if (winner === "human") {
      setRecord(handleUpdateRecord("player_one", record));
    } else if (winner === "draw") {
      setRecord(handleUpdateRecord("draw", record));
    }
  }, [winner]);

  /**
   * Holds Components for Rock Paper Scissors Game
   * * Imports game logic from <RockPaperContext />
   */
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
