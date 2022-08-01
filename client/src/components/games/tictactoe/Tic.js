import React, { useEffect, useState, useContext } from "react";
import GameSquare from "./atoms/gameSquare/GameSquare";
import Button from "../../atoms/Button/Button";
import ScoreKeeper from "../../atoms/ScoreKeeper/ScoreKeeper";
import OpponentNames from "../../../utilities/OpponentNames";
import UpdateRecords from "../../../utilities/UpdateRecords";
import { TicContext } from "../../../contexts/tictactoe/TicContext";

import StyledTic from "./StyledTic";

const Tic = () => {
  const {
    gamePhase,
    squareSelected,
    setSquareSelected,
    opponentName,
    gameDetails,
    startGame,
    startComputerGame,
    updateBoard,
    handleTurn,
    resetGame,
    quitGame,
    record
  } = useContext(TicContext);


  const gameBoard = () => {
    return gameDetails.game.map((element, index) => {
      return (
        <GameSquare
          index={index}
          key={index}
          value={element.element}
          playerTurn={gameDetails.playerTurn}
          setSquareSelected={setSquareSelected}
        />
      );
    });
  };
  useEffect(() => {
    updateBoard(squareSelected);
    if (gameDetails.victory === 0 && gameDetails.playerTurn !== 0) {
      handleTurn();
    }
  }, [squareSelected, gamePhase]);

  return (
    <StyledTic>
      {gamePhase === "setup" && (
        <div id="setup-box">
          <h4>Select Opponent:</h4>
          <div id="button-wrapper">
            <Button onClick={startGame} message="Human" />
            <Button onClick={startComputerGame} message="Robot" />
          </div>
        </div>
      )}
      {gamePhase === "play" && (
        <div>
          <div id="game-header">
            <h4>Tic-Tac-Toe</h4>
            {gameDetails.victory == 0 && !gameDetails.computerPlayer && (
              <p>It's currently Player {gameDetails.playerTurn}'s turn</p>
            )}
            {(gameDetails.victory == 1 || gameDetails.victory == 2) && (
              <p>Player {gameDetails.victory} is victorious! </p>
            )}
            {gameDetails.computerPlayer && (
              <p>Playing against {opponentName}</p>
            )}
            {gameDetails.victory == 3 && <p>Draw</p>}
          </div>
          <div className="game-grid">{gameBoard()}</div>
          <div className="game-options">
            <Button message="Reset Game" onClick={() => resetGame()} />
            <Button message="Quit Game" onClick={() => quitGame()} />
          </div>
          <ScoreKeeper name={opponentName} record={record} />
        </div>
      )}
    </StyledTic>
  );
};

export default Tic;
