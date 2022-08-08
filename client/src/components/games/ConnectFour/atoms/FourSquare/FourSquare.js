/* Library Imports */
import React from 'react';


/* Component Imports */

/* Asset Imports */
import StyledFourSquare from './StyledFourSquare';

const FourSquare = ({props, onSelect}) => {

  return (
    <StyledFourSquare 
    onClick={() => onSelect(props.indexArray[0], props.indexArray[1])} 
    available={props.available} 
    selected={props.selected} >
      <div id="circle" className={`${props.indexArray[0]}${props.indexArray[1]}`} />
    </StyledFourSquare>
  )
};

export default FourSquare;