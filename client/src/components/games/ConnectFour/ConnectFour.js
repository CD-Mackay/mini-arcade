/* Library Imports */
import React, { useState, useEffect, useContext } from "react";

/* Component Imports */
import FourBoard from "./atoms/FourBoard/FourBoard";
import ScoreKeeper from "../../atoms/ScoreKeeper/ScoreKeeper";
import Button from "../../atoms/Button/Button";
import { ConnectFourContext } from "../../../contexts/connectfour/ConnectFourContext";

/* Asset Imports */
import StyledConnectFour from "./StyledConnectFour";
import UpdateRecords from "../../../utilities/UpdateRecords";
import Alert from "../../atoms/Alert/Alert";


const ConnectFour = () => {
  const {
    board,
    playerTurn,
    setPlayerTurn,
    computerPlayer,
    phase,  
    winner,
    error,
    handleComputerMove,
    handleSetup,
    resetGame,
    makeBoard,
    handlePickSquare,
    checkForValidSquares,
    checkForAscendingWin,
    checkForDescendingWin,
    checkForHorizontalWin,
    checkForVerticalWin,
  } = useContext(ConnectFourContext);

  const [record, setRecord] = useState({
    player_one: 0,
    player_two: 0,
    draw: 0,
  });

  const { handleUpdateRecord } = UpdateRecords;

  useEffect(() => {
    makeBoard();
  }, []);

  useEffect(() => {
    checkForValidSquares(board);
    checkForVerticalWin(board);
    checkForHorizontalWin(board);
    checkForAscendingWin(board);
    checkForDescendingWin(board);
    if (!computerPlayer) {
      if (playerTurn === 1) {
        setPlayerTurn(2);
      } else {
        setPlayerTurn(1);
      }
    }
    if (computerPlayer) {
      console.log("computerPlayer!");
      if (playerTurn === 1) {
        setPlayerTurn(2);
        handleComputerMove();
      } else {
        setPlayerTurn(1);
      }
    }
  }, [board]);

  useEffect(() => {
    if (winner !== 0) {
      winner === 1
        ? setRecord(handleUpdateRecord("player_one", record))
        : setRecord(handleUpdateRecord("player_two", record));
    }
  }, [winner]);

  return (
    <StyledConnectFour>
      <div />
      <div id="game-wrapper">
        <h4>Connect Four!</h4>
        {phase === "setup" && <h6>Select Your Opponent</h6>}
        {phase === "play" && (
          <div>
            <h6>Player {playerTurn}'s Turn</h6>
            <Alert
              visible={error.visible}
              message={error.message}
              color={error.color}
            />
            <FourBoard
              onSelect={handlePickSquare}
              board={board}
              winner={winner}
            />
            <Button onClick={resetGame} message="Reset Game" />
          </div>
        )}
        {phase === "setup" && (
          <div id="setup-wrapper">
            <Button message="Human" onClick={() => handleSetup(false)} />
            <Button message="Robot" onClick={() => handleSetup(true)} />
          </div>
        )}
      </div>
      {phase === "play" && (
        <div id="scoreboard-wrapper">
          <ScoreKeeper record={record} />
        </div>
      )}
    </StyledConnectFour>
  );
};

export default ConnectFour;
