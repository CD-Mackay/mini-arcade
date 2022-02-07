/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledFourBoard from './StyledFourBoard';

const FourBoard = ({makeBoard}) => {
  return (
    <StyledFourBoard>
      {makeBoard()}
    </StyledFourBoard>
  )
};

export default FourBoard;