import React, { useState } from 'react';
import ThrowSelect from './atoms/ThrowSelect/ThrowSelect';

import StyledRockPaper from './StyledRockPaper';

const RockPaper = () => {

  const [input, setInput] = useState("");

  return (
    <StyledRockPaper>
      <ThrowSelect />
    </StyledRockPaper>
  )
};

export default RockPaper;