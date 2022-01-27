import React, { useEffect, useState } from 'react';
import GameSquare from './atoms/gameSquare/GameSquare';
import Button from '../../atoms/Button/Button';
import ReactDOM from 'react-dom';

import StyledTic from './StyledTic';

const Tic = () => {

  const [gamePhase, setGamePhase] = useState("setup");
  const [playerTurn, setPlayerTurn] = useState(0);
  const [squareSelected, setSquareSelected] = useState(null);
  const [game, setGame] = useState([]);
  const [victory, setVictory] = useState(0);
  const [computerPlayer, setComputerPlayer] = useState(false);
  const [opponentName, setOpponentName] = useState("");

  const robitNames = [
    "Bender B. Rodriguez", "BALEX", "SkyNet", "T-1000", "R2D2", "Roy Batty", "Vanessa Powers", "Ultron", "Motoko Kusanagi"
  ];

  const squares = ["", "", "", "", "", "", "", "", ""];

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
  


  const startGame = () => {
    setGamePhase("play");
    setGame(squares);
  };

  const startComputerGame = () => {
    setComputerPlayer(true);
    setOpponentName(robitNames[Math.floor(Math.random() * robitNames.length)]);
    startGame();
  };

  const handleComputerTurn = () => {
    console.log("computerTurn");
    let activeBoard = [...game];

    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = game[winCondition[0]];
      const firstNum = winCondition[0];
      const b = game[winCondition[1]];
      const secondNum = winCondition[1];
      const c = game[winCondition[2]];
      const thirdNum = winCondition[2];
      let array = [
        {letter: a, number: firstNum }, {letter: b, number: secondNum}, {letter: c, number: thirdNum}
      ]; // letter value = selected status of game square, number = index of square
      console.log("empty winCondition?", a === "" && b === "" && c === "", winCondition);
      if ((a === 2 || b === 2 || c === 2) && (a !== 1 && b !== 1 && c !== 1)) { // Check if computer has already progressed on winCondition, check for block
        for (const entry of array) {
          if (entry.letter === "") { // grab first available square from winCondition
            setSquareSelected(entry.number);
            return;
          }
        }
      } else if ((a === "" && b === "" && c === "")) { // check for empty winCondition
        console.log("empy winCondition found")
        setSquareSelected(firstNum);
        return;
      } else {
        continue;
      }
    } 
    // Picks first available square, only runs on initial turn
    console.log("running firstTurnmode")
    for (let i = 0; i < activeBoard.length; i++) {
      if (activeBoard[i] === "") {
        setSquareSelected(i);
        return;
      }
    }
  }

  const checkForWin = (game, playerTurn) => {

    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = game[winCondition[0]];
      const b = game[winCondition[1]];
      const c = game[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        if (playerTurn !== 0) {
          setVictory(playerTurn);
        }
        break;
      } if (!game.includes("")) {
        setVictory(3);
      }
    } 
  };

  const updateBoard = (index) => {
    let board = [...game];
    board[index] = playerTurn;
    setGame(board);
    checkForWin(board, playerTurn);
  };

  const handleTurn = () => {
    if (computerPlayer && playerTurn === 1) {
        setPlayerTurn(2);
        setTimeout(() => {
          handleComputerTurn();
        }, 300);
    } else if (computerPlayer && playerTurn === 2) {
      console.log("human turn");
      setPlayerTurn(1);
    } else if (!computerPlayer) {
      playerTurn == 1 ? setPlayerTurn(2) : setPlayerTurn(1);
    }
  };

  const resetGame = () => {
    console.log("reset");
    setGamePhase("setup");
    setGame(squares);
    setVictory(0);
    setGamePhase("play");
  };


  const gameBoard = () => {
    console.log("rendering board");
     return game.map((element, index) => {
    return  <GameSquare 
      index={index} 
      key={index} 
      value={element}
      playerTurn={playerTurn} 
      setSquareSelected={setSquareSelected}
      />
    });
  }
  ;

  useEffect(() => {
    updateBoard(squareSelected);
  }, [squareSelected, gamePhase]);

  useEffect(() => {
    if (victory === 0) {
      handleTurn();
    }
  }, [game])

  return (
    <StyledTic>
      {gamePhase === "setup" &&
      <div id="setup-box">
        <h4>Select Human or Robotic Opponent</h4>
        <div id="button-wrapper">
          <Button onClick={startGame} message="Human" />
          <Button onClick={startComputerGame} message="Robot" />
        </div>
      </div>
      }
      {gamePhase === "play" && 
      <div>
        <div id="game-header">
          <h4>The Game is Afoot!</h4>
          {(victory == 0 && !computerPlayer) && <p>It's currently Player {playerTurn}'s turn</p>}
          {(victory == 1 || victory == 2) && <p>Player {victory} is victorious! </p>}
          {computerPlayer && <p>Playing against {opponentName}</p>}
          {victory == 3 && <p>Draw</p>}
        </div>
        <div className="game-grid" >
          {gameBoard()}
        </div>
        <div className="game-options">
          <Button message="Reset Game" onClick={() => resetGame()} />
          <Button message="Quit Game" />
        </div>
      </div>
      }
    </StyledTic>
  )
};

export default Tic;