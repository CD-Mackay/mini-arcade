/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledFourSquare from './StyledFourSquare';

const FourSquare = ({props, onSelect}) => {

  return (
    <StyledFourSquare onClick={() => onSelect(props.indexArray[0], props.indexArray[1])} >
      <p>{props.index}</p>
      <p>{props.available ? "O" : "X"}</p>
      <p>{props.selected}</p>
    </StyledFourSquare>
  )
};

export default FourSquare;