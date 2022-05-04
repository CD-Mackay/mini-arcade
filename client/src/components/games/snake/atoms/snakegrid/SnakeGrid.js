import React, { useState } from 'react';
import SnakeSquare from '../SnakeSquare/SnakeSquare';

import StyledSnakeGrid from "./StyledSnakeGrid";

const SnakeGrid = () => {

  const [board, setBoard] = useState();
  const [currentSnake, setCurrentSnake] = useState([2, 1, 0]);
  const [appleIndex, setAppleIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const buildBoard = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        board.push({row: i, column: x});
      }
    }
    return board.map(element => {
      return <SnakeSquare index={element} id={`${element.row} ${element.column}`} key={[element.row, element.column]} />
    })
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

  document.addEventListener("keyup", control);
  return (
    <StyledSnakeGrid >
      {buildBoard()}
    </StyledSnakeGrid>
  );
};

export default SnakeGrid;