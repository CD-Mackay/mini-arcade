import React, { useState } from "react";
import SnakeSquare from "../SnakeSquare/SnakeSquare";

import StyledSnakeGrid from "./StyledSnakeGrid";

const SnakeGrid = () => {
  const [board, setBoard] = useState();
  const [currentSnake, setCurrentSnake] = useState([]);
  const [appleIndex, setAppleIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const buildBoard = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        board.push({ row: i, column: x });
      }
    }
    return board.map((element) => {
      return (
        <SnakeSquare index={element} key={[element.row, element.column]} />
      );
    });
  };

  function updateSnake(array, removed) {
    for (let entry of array) {
      let snakeNode = document.getElementById(`${entry.row}${entry.column}`);
      if (!snakeNode) {
        console.log(`Could not find: ${entry.row}${entry.column}`);
      } if (snakeNode) {
        snakeNode.classList.add("snake")
      }
    }
    if (removed) {
      console.log(removed);
      let removedNode = document.getElementById(`${removed.row}${removed.column}`);
      removedNode.classList.remove("snake")
    }
  };

  function control(event) {
    if (event.key === "w") {
      console.log("up");
    } else if (event.key === "d") {
      console.log("right");
    } else if (event.key === "s") {
      console.log("down");
    } else if (event.key === "a") {
      console.log("left");
    }
  }

  function startGame() {
    let apple = [3, 2];
    let appleNode = document.getElementById(`${apple[0]}${apple[1]}`);
    console.log(appleNode);
    appleNode.setAttribute("id", "apple");
    let initSnake = [
      { row: 0, column: 0, index: 0 },
      { row: 0, column: 1, index: 1 },
      { row: 0, column: 2, index: 2 },
    ]
    setCurrentSnake(initSnake);
    updateSnake(initSnake)
  };



  function handleOutcome() {
    let newSnake = [...currentSnake];
    newSnake.sort(function (a, b) {
      return a.index - b.index
    });
    if (direction === "right") {
      console.log(newSnake);
     let newPart = newSnake[0];
     let removed = newSnake.shift();
      newPart.column += currentSnake.length;
      newPart.index = currentSnake.length;
      for (let entry of newSnake) {
        entry.index--;
      };
      newSnake.push(newPart);
      newSnake.sort(function (a, b) {
        return b.index - a.index
      });
      console.log(newSnake, removed);
      setCurrentSnake(newSnake);
      // updateSnake(newSnake, removed);
    }
  };

  // setInterval(() => {
  //   handleOutcome();
  // }, 1000)

  document.addEventListener("keyup", control);
  return (
    <StyledSnakeGrid>
      {buildBoard()}
      <button onClick={startGame}>start</button>
      <button onClick={handleOutcome}>move</button>
    </StyledSnakeGrid>
  );
};

export default SnakeGrid;