/* Library Imports */
import React, { useEffect } from 'react';


/* Component Imports */
import FourSquare from '../FourSquare/FourSquare';

/* Asset Imports */
import StyledFourBoard from './StyledFourBoard';

const FourBoard = ({board}) => {


  const renderBoard = (array) => {
    return array.map((element) => {
      return element.map((square) => {
        return <FourSquare key={square.index} props={square} />
      })
    })
  };

  const checkForValidSquares = (array) => {
      for (let i = array.length - 1; i >= 0; i--) {
        for (let x = array[i].length - 1; x >= 0; x--) {
          console.log(array[i][x])
        }
    }
  };


  useEffect(() => {
      checkForValidSquares(board);
  }, [board]);

  return (
    <StyledFourBoard>
      {renderBoard(board)}
    </StyledFourBoard>
  )
};

export default FourBoard;