import React, { useState } from 'react';

import StyledSnakeSquare from "./StyledSnakeSquare";

const SnakeSquare = ({index}) => {

  const [status, setStatus] = useState("empty");

  return (
    <StyledSnakeSquare status={status} >
      {index.row}{index.column}
    </StyledSnakeSquare>
  );
};

export default SnakeSquare;