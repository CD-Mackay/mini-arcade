import React, { useState } from 'react';

import StyledSnakeGrid from "./StyledSnakeGrid";

const SnakeGrid = () => {

  const [board, setBoard] = useState();

  const buildBoard = () => {
    let board = [];
    for (let i = 0; i < 10; i++) {
      for (let x = 0; x < 10; x++) {
        board.push({row: i, column: x});
      }
    }
    return board.map(element => {
      return <div className="game-square" key={[element.row, element.column]}>{element.row}, {element.column}</div>
    })
  }
  return (
    <StyledSnakeGrid >
      {buildBoard()}
    </StyledSnakeGrid>
  );
};

export default SnakeGrid;