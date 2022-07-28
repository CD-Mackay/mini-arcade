import React, { useEffect, useState } from "react";
import GameSquare from "./atoms/gameSquare/GameSquare";
import Button from "../../atoms/Button/Button";
import ScoreKeeper from "../../atoms/ScoreKeeper/ScoreKeeper";
import OpponentNames from "../../../utilities/OpponentNames";
import UpdateRecords from "../../../utilities/UpdateRecords";

import StyledTic from "./StyledTic";

const Tic = () => {
  const [gamePhase, setGamePhase] = useState("setup"); // keep separate
  const [squareSelected, setSquareSelected] = useState(null); // keep separate
  const [opponentName, setOpponentName] = useState(""); // keep separate
  const [record, setRecord] = useState({
    player_one: 0,
    player_two: 0,
    draw: 0,
  }); // keep separate

  // const [playerTurn, setPlayerTurn] = useState(0);
  // const [game, setGame] = useState([]);
  // const [victory, setVictory] = useState(0);
  // const [computerPlayer, setComputerPlayer] = useState(false);

  const [gameDetails, setGameDetails] = useState({
    playerTurn: 0,
    game: [],
    victory: 0,
    computerPlayer: false,
  });

  console.log(gameDetails);

  const { robitNames, pickRobotName } = OpponentNames;
  const { handleUpdateRecord } = UpdateRecords;

  const squares = ["", "", "", "", "", "", "", "", ""];

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const startGame = () => {
    setGamePhase("play");
    let gamePiece = squares.map((element, index) => {
      return { element: element, score: 0, index };
    });
    // setGame(gamePiece);
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: gamePiece, playerTurn: 1 };
    });
    // setPlayerTurn(1);
  };

  const startComputerGame = () => {
    // setComputerPlayer(true);
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, computerPlayer: true };
    });
    setOpponentName(pickRobotName(robitNames));
    startGame();
  };

  const clearSquareValues = () => {
    let activeBoard = [...gameDetails.game];
    // setGame(
    //   activeBoard.map((element) => {
    //     return { element: element.element, index: element.index, score: 0 };
    //   })
    // );
    const currentBoard = activeBoard.map((element) => {
      return { element: element.element, index: element.index, score: 0 };
    });
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: currentBoard };
    });
  };

  const updateSquareValues = (number, squareScore) => {
    let values = [...gameDetails.game];
    for (let entry of values) {
      if (entry.index === number) {
        entry.score += squareScore;
      }
    }
    // setGame(values);

    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: values };
    });
  };

  const selectComputerOffense = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = gameDetails.game[winCondition[0]].element;
      const firstNum = winCondition[0];
      const b = gameDetails.game[winCondition[1]].element;
      const secondNum = winCondition[1];
      const c = gameDetails.game[winCondition[2]].element;
      const thirdNum = winCondition[2];
      let array = [
        { letter: a, number: firstNum, score: 0 },
        { letter: b, number: secondNum, score: 0 },
        { letter: c, number: thirdNum, score: 0 },
      ]; // letter value = selected status of game square, number = index of square
      if ((a === 2 || b === 2 || c === 2) && a !== 1 && b !== 1 && c !== 1) {
        // Check if computer has already progressed on winCondition, check for block
        for (let entry of array) {
          if (entry.letter === "") {
            // grab first available square from winCondition
            updateSquareValues(entry.number, 1);
          }
        }
      } else if (a === "" && b === "" && c === "") {
        // check for empty winCondition
        updateSquareValues(firstNum, 1);
        updateSquareValues(secondNum, 1);
        updateSquareValues(thirdNum, 1);
      }
    }
  };

  const selectComputerDefense = () => {
    for (let i = 0; i <= 7; i++) {
      const winCondition = winConditions[i];
      const a = gameDetails.game[winCondition[0]].element;
      const firstNum = winCondition[0];
      const b = gameDetails.game[winCondition[1]].element;
      const secondNum = winCondition[1];
      const c = gameDetails.game[winCondition[2]].element;
      const thirdNum = winCondition[2];
      let array = [
        { letter: a, number: firstNum, score: 0 },
        { letter: b, number: secondNum, score: 0 },
        { letter: c, number: thirdNum, score: 0 },
      ]; // letter value = selected status of game square, number = index of square
      let incrementer = 0;
      for (let entry of array) {
        if (entry.letter === 1) {
          incrementer++;
        }
        if (incrementer === 2) {
          for (let entry of array) {
            if (entry.letter === "") {
              updateSquareValues(entry.number, 20);
            }
          }
        }
      }
      if ((a === 1 || b === 1 || c === 1) && a !== 2 && b !== 2 && c !== 2) {
        // Check if human has already progressed on winCondition, check for block
      }
    }
  };

  const handleComputerTurn = (turn) => {
    if (turn === 2) {
      console.log("inside if block", turn);
      clearSquareValues();
      selectComputerDefense();
      selectComputerOffense();
      let finalScores = [...gameDetails.game];
      finalScores = finalScores.sort((a, b) => {
        return b.score - a.score;
      });
      for (let i = 0; i <= finalScores.length; i++) {
        if (finalScores[i].element === "") {
          setSquareSelected(finalScores[i].index);
          return;
        }
      }
    }
  };

  const checkForWin = (game, playerTurn) => {
    if (game.length > 0) {
      for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        const a = game[winCondition[0]];
        const b = game[winCondition[1]];
        const c = game[winCondition[2]];
        if (a.element === "" || b.element === "" || c.element === "") {
          continue;
        }
        if (a.element === b.element && b.element === c.element) {
          if (gameDetails.playerTurn !== 0) {
            // setVictory(playerTurn);
            setGameDetails((prevGameDetails) => {
              return { ...prevGameDetails, victory: playerTurn };
            });
            gameDetails.playerTurn === 1
              ? setRecord(handleUpdateRecord("player_one", record))
              : setRecord(handleUpdateRecord("player_two", record));
          }
          break;
        }
        let array = [];
        for (let entry of game) {
          array.push(entry.element);
        }
        if (!array.includes("")) {
          // setVictory(3);
          setGameDetails((prevGameDetails) => {
            return { ...prevGameDetails, victory: 3 };
          });
          setRecord(handleUpdateRecord("draw", record));
        }
      }
    }
  };

  const updateBoard = (index) => {
    if (gameDetails.playerTurn !== 0) {
      let board = [...gameDetails.game];
      console.log("running updateBoard", board);
      for (let entry of board) {
        if (entry.index === index) {
          entry.element = gameDetails.playerTurn;
        }
      }
      // setGame(board);
      setGameDetails((prevGameDetails) => {
        return { ...prevGameDetails, game: board };
      });
      checkForWin(board, gameDetails.playerTurn);
    }
  };

  const handleTurn = () => {
    if (gameDetails.computerPlayer && gameDetails.playerTurn === 1) {
      // setPlayerTurn(2);
      setGameDetails((prevGameDetails) => {
        return { ...prevGameDetails, playerTurn: 2 };
      });
      setTimeout(() => {
        handleComputerTurn(2);
      }, 300);
    } else if (gameDetails.computerPlayer && gameDetails.playerTurn === 2) {
      // setPlayerTurn(1);
      setGameDetails((prevGameDetails) => {
        return { ...prevGameDetails, playerTurn: 1 };
      });
    } else if (!gameDetails.computerPlayer) {
      gameDetails.playerTurn == 1
        ? setGameDetails((prevGameDetails) => {
            return { ...prevGameDetails, playerTurn: 2 };
          })
        : setGameDetails((prevGameDetails) => {
            return { ...prevGameDetails, playerTurn: 1 };
          });
    }
  };

  const resetGame = () => {
    setGamePhase("setup");
    // setGame(
    //   squares.map((element, index) => {
    //     return { element, index, score: 0 };
    //   })
    // );
    let gameStart = squares.map((element, index) => {
      return { element, index, score: 0 };
    });

    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: gameStart, victory: 0, playerTurn: 1 };
    });
    // setVictory(0);
    setSquareSelected(null);
    setGamePhase("play");
    // setPlayerTurn(1);
  };

  const quitGame = () => {
    setGamePhase("setup");
    // setGame([]);
    // setComputerPlayer(false);
    // setPlayerTurn(0);
    // setVictory(0);
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: [], victory: 0, playerTurn: 0, computerPlayer: false };
    });
    setSquareSelected(null);
  };

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
