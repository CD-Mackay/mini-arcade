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

  function updateSnake(array) {
    for (let entry of array) {
      let snakeNode = document.getElementById(`${entry.row}${entry.column}`);
      snakeNode.setAttribute("id", "snake");
    }
  }

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
      { row: 0, column: 0 },
      { row: 0, column: 1 },
      { row: 0, column: 2 },
    ]
    setCurrentSnake(initSnake);
    updateSnake(initSnake)
  };



  function handleOutcome() {
    let newSnake = [...currentSnake];
    if (direction === "right") {
      newSnake[0].column += newSnake.length;
      updateSnake(newSnake);
    }
  };

  setInterval(() => {
    handleOutcome();
  }, 1000)

  document.addEventListener("keyup", control);
  return (
    <StyledSnakeGrid>
      {buildBoard()}
      <button onClick={startGame}>start</button>
    </StyledSnakeGrid>
  );
};

export default SnakeGrid;
