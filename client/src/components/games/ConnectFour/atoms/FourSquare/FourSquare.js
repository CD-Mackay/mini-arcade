/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledFourSquare from './StyledFourSquare';

const FourSquare = ({props, onSelect}) => {

  return (
    <StyledFourSquare onClick={() => onSelect(props.indexArray[0], props.indexArray[1])} >
      <p>{props.index}{props.selected}</p>
      <div id="circle"></div>
    </StyledFourSquare>
  )
};

export default FourSquare;