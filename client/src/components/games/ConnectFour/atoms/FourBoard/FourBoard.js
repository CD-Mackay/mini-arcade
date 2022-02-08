/* Library Imports */
import React, { useEffect } from 'react';


/* Component Imports */
import FourSquare from '../FourSquare/FourSquare';

/* Asset Imports */
import StyledFourBoard from './StyledFourBoard';

const FourBoard = ({board, onSelect}) => {


  const renderBoard = (array) => {
    return array.map((element) => {
      return element.map((square) => {
        return <FourSquare key={square.index} onSelect={onSelect} props={square} />
      })
    })
  };




  return (
    <StyledFourBoard>
      {renderBoard(board)}
    </StyledFourBoard>
  )
};

export default FourBoard;