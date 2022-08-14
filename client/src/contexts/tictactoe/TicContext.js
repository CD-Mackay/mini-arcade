// Library Imports
import React, { createContext, useState } from "react";

// Asset Imports
import OpponentNames from "../../utilities/OpponentNames";
import UpdateRecords from "../../utilities/UpdateRecords";

export const TicContext = createContext({});

export function TicContextProvider(props) {
  const { robitNames, pickRobotName } = OpponentNames;
  const { handleUpdateRecord } = UpdateRecords;
  const [gamePhase, setGamePhase] = useState("setup");
  const [squareSelected, setSquareSelected] = useState(null);
  const [opponentName, setOpponentName] = useState("");
  const [gameDetails, setGameDetails] = useState({
    playerTurn: 0,
    game: [],
    victory: 0,
    computerPlayer: false,
  });
  const [record, setRecord] = useState({
    player_one: 0,
    player_two: 0,
    draw: 0,
  });

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
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: gamePiece, playerTurn: 1 };
    });
  };

  const startComputerGame = () => {
    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, computerPlayer: true };
    });
    setOpponentName(pickRobotName(robitNames));
    startGame();
  };

  const clearSquareValues = () => {
    let activeBoard = [...gameDetails.game];
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
            setGameDetails((prevGameDetails) => {
              return { ...prevGameDetails, victory: playerTurn };
            });
            // gameDetails.playerTurn === 1
            //   ? setRecord(handleUpdateRecord("player_one", record))
            //   : setRecord(handleUpdateRecord("player_two", record));
          }
          break;
        }
        let array = [];
        for (let entry of game) {
          array.push(entry.element);
        }
        if (!array.includes("")) {
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
      for (let entry of board) {
        if (entry.index === index) {
          entry.element = gameDetails.playerTurn;
        }
      }
      setGameDetails((prevGameDetails) => {
        return { ...prevGameDetails, game: board };
      });
      checkForWin(board, gameDetails.playerTurn);
    }
  };

  const handleTurn = () => {
    if (gameDetails.computerPlayer && gameDetails.playerTurn === 1) {
      setGameDetails((prevGameDetails) => {
        return { ...prevGameDetails, playerTurn: 2 };
      });
      setTimeout(() => {
        handleComputerTurn(2);
      }, 300);
    } else if (gameDetails.computerPlayer && gameDetails.playerTurn === 2) {
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
    let gameStart = squares.map((element, index) => {
      return { element, index, score: 0 };
    });

    setGameDetails((prevGameDetails) => {
      return { ...prevGameDetails, game: gameStart, victory: 0, playerTurn: 1 };
    });

    setSquareSelected(null);
    setGamePhase("play");
  };

  const quitGame = () => {
    setGamePhase("setup");
    setGameDetails((prevGameDetails) => {
      return {
        ...prevGameDetails,
        game: [],
        victory: 0,
        playerTurn: 0,
        computerPlayer: false,
      };
    });
    setSquareSelected(null);
  };

    /**
   * Context Component to handle Tic-Tac-Toe Game Logic
   */

  return (
    <TicContext.Provider
      value={{
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
        record,
      }}
    >
      {props.children}
    </TicContext.Provider>
  );
}
