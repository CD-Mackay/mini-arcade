import React, { useEffect, useState } from 'react';
import GameSquare from './atoms/gameSquare/GameSquare';
import Button from '../../atoms/Button/Button';
import ReactDOM from 'react-dom';

import StyledTic from './StyledTic';

const Tic = () => {

  const [gamePhase, setGamePhase] = useState("setup");
  const [playerTurn, setPlayerTurn] = useState(1);
  const [squareSelected, setSquareSelected] = useState(10);
  let squares = ["", "", "", "", "", "", "", "", ""];

  const startGame = () => {
    setGamePhase("play");
    setPlayerTurn(1);
    gameBoard();
  };


  const updateBoard = (index) => {
    squares[index] = playerTurn;
  };

  const handleTurn = () => {
    // updateBoard(squareSelected);
    // checkForWin(squares, player);
  };




  const gameBoard = () => {
   return squares.map((element, index) => {
      return <GameSquare 
      index={index} 
      key={index} 
      playerTurn={playerTurn} 
      setSquareSelected={setSquareSelected}
      setPlayerTurn={setPlayerTurn} />
    });
  };

  return (
    <StyledTic>
      {gamePhase === "setup" &&
      <div id="setup-box">
        <h4>Select Human or Robotic Opponent</h4>
        <div id="button-wrapper">
          <Button onClick={startGame} message="Human" />
          <Button onClick={startGame} message="Robot" />
        </div>
      </div>
      }
      {gamePhase === "play" && 
      <div>
        <div id="game-header">
          <h4>The Game is Afoot!</h4>
          <p>It's currently Player {playerTurn}'s turn</p>
        </div>
        <div className="game-grid">
          {gameBoard()}
        </div>
        <div className="game-options">
          <Button message="Reset Game" />
          <Button message="Quit Game" />
        </div>
      </div>
      }
    </StyledTic>
  )
};

export default Tic;