/* Library Imports */
import React from 'react';


/* Component Imports */
import FourSquare from '../FourSquare/FourSquare';

/* Asset Imports */
import StyledFourBoard from './StyledFourBoard';

const FourBoard = ({board, onSelect, winner}) => {


  const renderBoard = (array) => {
    return array.map((element) => {
      return element.map((square) => {
        return <FourSquare key={square.index} onSelect={onSelect} props={square} />
      })
    })
  };

  /**
   * Renders and displays Connect Four Board
   */
  return (
    <StyledFourBoard>
      {renderBoard(board)}
      {winner !== 0 && <p>Player {winner} is victorious!</p>}
    </StyledFourBoard>
  )
};

export default FourBoard;