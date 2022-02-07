/* Library Imports */
import React, { useState } from 'react';


/* Component Imports */
import FourBoard from './atoms/FourBoard/FourBoard';
import FourSquare from './atoms/FourSquare/FourSquare';

/* Asset Imports */
import StyledConnectFour from './StyledConnectFour';

const ConnectFour = () => {

  const [board, setBoard] = useState([]);

  const makeBoard = () => {
    let array = [];
    let subArray = [];
    for (let i = 0; i < 6; i++) {
      for (let x = 0; x < 8; x ++) {
        let indexArray = [i, x];
        let newIndex = Number(indexArray.join(''));
        subArray.push({index: newIndex, selected: false, available: false});
      } array.push(subArray);
        subArray = [];
    } 
    // setBoard(array);
    return array.map((element) => {
      return element.map((square) => {
        return <FourSquare key={square.index} props={square} />
      })
    })
  };

  return (
    <StyledConnectFour>
      <FourBoard makeBoard={makeBoard} />
    </StyledConnectFour>
  )
};

export default ConnectFour;