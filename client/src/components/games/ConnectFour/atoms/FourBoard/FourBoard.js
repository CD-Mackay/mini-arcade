/* Library Imports */
import React from 'react';


/* Component Imports */
import FourSquare from '../FourSquare/FourSquare';

/* Asset Imports */
import StyledFourBoard from './StyledFourBoard';

const FourBoard = ({board}) => {

  const renderBoard = (array) => {
    return array.map((element) => {
      return element.map((square) => {
        return <FourSquare key={Number(square.index .join(''))} props={square} />
      })
    })
  }

  return (
    <StyledFourBoard>
      {renderBoard(board)}
    </StyledFourBoard>
  )
};

export default FourBoard;