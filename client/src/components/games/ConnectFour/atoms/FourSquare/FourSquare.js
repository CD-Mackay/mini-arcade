/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledFourSquare from './StyledFourSquare';

const FourSquare = ({props}) => {

  return (
    <StyledFourSquare>
      <p>{props.index}</p>
    </StyledFourSquare>
  )
};

export default FourSquare;