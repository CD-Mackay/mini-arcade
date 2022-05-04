import React, { useState } from 'react';

import StyledSnakeSquare from "./StyledSnakeSquare";

const SnakeSquare = ({index}) => {

  const [status, setStatus] = useState("empty");

  return (
    <StyledSnakeSquare status={status} >
      <div id={`${index.row}${index.column}`}>
      {index.row}{index.column}
      </div>
    </StyledSnakeSquare>
  );
};

export default SnakeSquare;