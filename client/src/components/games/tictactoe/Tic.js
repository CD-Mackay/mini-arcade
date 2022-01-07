import React, { useEffect, useState } from 'react';
import GameSquare from './atoms/gameSquare/GameSquare';
import Button from '../../atoms/Button/Button';
import ReactDOM from 'react-dom';

import StyledTic from './StyledTic';

const Tic = () => {

  const [gamePhase, setGamePhase] = useState("setup");
  const [playerTurn, setPlayerTurn] = useState(0);
  const [squareSelected, setSquareSelected] = useState(null);
  const squares = ["", "", "", "", "", "", "", "", ""];
  const [game, setGame] = useState([]);



  const startGame = () => {
    setGamePhase("play");
    gameBoard();
    setGame(squares);
  };


  const updateBoard = (index) => {
    let board = [...game];
    board[index] = playerTurn;
    setGame(board);
    checkForWin(board, playerTurn)
  };

  const checkForWin = (game, playerTurn) => {
    console.log("checkForWin", game);
    let victory = false;
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = game[winCondition[0]];
      const b = game[winCondition[1]];
      const c = game[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        victory = true;
        console.log("the game is over!", playerTurn, "is victorios")
        break;
      }
    }
  }

  const handleTurn = () => {
      updateBoard(squareSelected);
    playerTurn == 1 ? setPlayerTurn(2) : setPlayerTurn(1);
  };




  const gameBoard = () => {
   return squares.map((element, index) => {
     return <GameSquare 
      index={index} 
      key={index} 
      playerTurn={playerTurn} 
      setSquareSelected={setSquareSelected}
      setPlayerTurn={setPlayerTurn} 
      />
    });
  };

  useEffect(() => {
    handleTurn();
  }, [squareSelected]);

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