import React, { useState, useEffect } from "react";
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
      }
      if (snakeNode) {
        snakeNode.classList.add("snake");
      }
    }
    if (removed) {
      let removedNode = document.getElementById(
        `${removed.row}${removed.column}`
      );
      removedNode.classList.remove("snake");
    }
  }

  function control(event) {
    if (event.key === "w") {
      setDirection("up");
    } else if (event.key === "d") {
      setDirection("right");
    } else if (event.key === "s") {
      setDirection("down");
    } else if (event.key === "a") {
      setDirection("left");
    }
  }

  async function startGame() {
    let apple = [3, 2];
    // let appleNode = document.getElementById(`${apple[0]}${apple[1]}`);
    //appleNode.setAttribute("id", "apple");
    let initSnake = [
      { row: 0, column: 0, index: 0, position: "tail" },
      { row: 0, column: 1, index: 1, position: "body" },
      { row: 0, column: 2, index: 2, position: "head" },
    ];
    setCurrentSnake(initSnake);
    updateSnake(initSnake);
  }

  function handleOutcome() {
    let newSnake = [...currentSnake];
    newSnake.sort((a, b) => a - b);
    let tailNode = newSnake.filter((element) => element.position === "tail");
    let headNode = newSnake.filter((element) => element.position === "head");
    let snakeCopy = newSnake.filter((element) => element.position === "head" || element.position === "body");
    const removed = newSnake.filter((element) => element.position === "tail");
    tailNode[0].column = headNode[0].column;
    tailNode[0].column += 1;
    tailNode[0].index = newSnake.length - 1;
    tailNode[0].position = "head";
    for (let element of snakeCopy) {
      if (element.position === "head") {
        element.position = "body";
      } else if (element.index === 1) {
        element.position = "tail"
      }
      element.index--;
    };
    let finalSnakeCopy = snakeCopy.concat(tailNode);
    updateSnake(finalSnakeCopy, removed[0]);
  }

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
