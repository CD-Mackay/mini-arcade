import React from "react";
import SnakeGrid from "./atoms/snakegrid/SnakeGrid";

import StyledSnake from "./StyledSnake";

const Snake = () => {
  
  return (
    <StyledSnake>
      <SnakeGrid />
    </StyledSnake>
  );
};

export default Snake;
