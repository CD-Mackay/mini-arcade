import React from 'react';
import SnakeGrid from './atoms/snakegrid/SnakeGrid';

import StyledSnake from "./StyledSnake";

const Snake = () => {

  return (
    <StyledSnake >
    <div>
      I am Snake
      <SnakeGrid />
      </div>
    </StyledSnake>
  );
};

export default Snake;