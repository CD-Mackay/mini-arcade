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

  const checkForValidSquares = (array) => {
    let arrayCopy = [...array];
      for (let i = arrayCopy.length - 1; i >= 0; i--) {
        for (let x = arrayCopy[i].length - 1; x >= 0; x--) {
          if (i > 0) {
            let bottomSquare = arrayCopy[i][x];
            let topSquare = arrayCopy[i - 1][x];
            if (bottomSquare.selected) {
              topSquare.available = true;
            }
          }
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