/* Library Imports */
import React, { useState, useEffect } from 'react';


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
        subArray.push({index: indexArray, selected: false, available: false});
      } array.push(subArray);
        subArray = [];
    } setBoard(array);
  };

  useEffect(() =>{
    makeBoard();
  }, []);

  return (
    <StyledConnectFour>
      <FourBoard board={board} />
    </StyledConnectFour>
  )
};

export default ConnectFour;