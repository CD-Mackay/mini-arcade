// Library Imports
import React from "react";

// Component Imports
import SnakeGrid from "./atoms/snakegrid/SnakeGrid";

// CSS Imports
import StyledSnake from "./StyledSnake";

const Snake = () => {
  
  /**
   * Holds Components for Snake Game
   */
  return (
    <StyledSnake>
      <SnakeGrid />
    </StyledSnake>
  );
};

export default Snake;
