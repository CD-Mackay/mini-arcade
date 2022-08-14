// Libray Imports
import React, { useState } from 'react';

// CSS Imports
import StyledSnakeSquare from "./StyledSnakeSquare";

const SnakeSquare = ({index}) => {

  const [status, setStatus] = useState("empty");


  /**
   * Displays individual squares on Snake Board
   * * Selective CSS depending on current status (e.g. "snake", "apple", "empty")
   */
  return (
    <StyledSnakeSquare status={status} >
      <div id={`${index.row}${index.column}`}>
      {index.row}{index.column}
      </div>
    </StyledSnakeSquare>
  );
};

export default SnakeSquare;