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
    let appleNode = document.getElementById(`${apple[0]}${apple[1]}`);
    console.log(appleNode);
    appleNode.setAttribute("id", "apple");
    let initSnake = [
      { row: 0, column: 0, index: 0 },
      { row: 0, column: 1, index: 1 },
      { row: 0, column: 2, index: 2 },
    ];
    setCurrentSnake(initSnake);
    updateSnake(initSnake);
  }

  function handleOutcome() {
    let newSnake = [...currentSnake];
    newSnake.sort(function (a, b) {
      return a.index - b.index;
    });
    const removed = newSnake.shift();
    const newNode = { ...newSnake[newSnake.length - 1] };
    console.log(newSnake, removed, newNode);
    if (direction === "right") {
      newNode.column += 1;
      newNode.index = newSnake.length + 1;
      newSnake.push(newNode);
    }
    if (direction === "down") {
      newNode.row += 1;
      newNode.index = newSnake.length + 1;
      newSnake.push(newNode);
    }

    if (direction === "up") {
      newNode.row -= 1;
      newNode.index = newSnake.length + 1;
      newSnake.push(newNode);
    }

    if (direction === "left") {
      newNode.column -= 1;
      newNode.index = newSnake.length + 1;
      newSnake.push(newNode);
    }

    for (let entry of newSnake) {
      entry.index--;
    }
    newSnake.sort(function (a, b) {
      return b.index - a.index;
    });
    setCurrentSnake(newSnake);
    updateSnake(newSnake, removed);
  }

  useEffect(() => {
    setInterval(() => {
      if (currentSnake.length > 0) {
         handleOutcome();
      }
    }, 2000);
  }, [currentSnake]);

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
