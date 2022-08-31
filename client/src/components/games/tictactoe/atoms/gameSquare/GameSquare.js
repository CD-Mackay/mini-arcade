// Library Imports
import React, { useEffect, useState } from "react";

// CSS Imports
import StyledGameSquare from "./StyledGameSquare";

const GameSquare = ({ index, setSquareSelected, value }) => {
  const [opacity, setOpacity] = useState(0);

  const handleSquareSelect = () => {
    if (value === "") {
      setSquareSelected(index);
    }
  };

  useEffect(() => {
    if (value !== "") {
      setOpacity(1);
    }
  }, [value]);

  /**
   * Controls display of individual Tic-Tac-Toe Squares
   */

  return (
    <StyledGameSquare
      id={`game-square-${index}`}
      onClick={handleSquareSelect}
      opacity={opacity}
      data-test-id={`game-square-${index}`}
    >
      {value && <p>{value === 1 ? "x" : "o"}</p>}
      <span>{index}</span>
    </StyledGameSquare>
  );
};

export default GameSquare;
