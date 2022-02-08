/* Library Imports */
import React, { useState, useEffect } from 'react';


/* Component Imports */
import FourBoard from './atoms/FourBoard/FourBoard';
import FourSquare from './atoms/FourSquare/FourSquare';

/* Asset Imports */
import StyledConnectFour from './StyledConnectFour';

const ConnectFour = () => {

  const [board, setBoard] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(1);

  const makeBoard = () => {
    console.log("making board!")
    let array = [];
    let subArray = [];
    for (let i = 0; i < 6; i++) {
      for (let x = 0; x < 8; x ++) {
        let indexArray = [i, x];
        let index = Number(indexArray.join(''));
        subArray.push({indexArray: indexArray, index: index, selected: 0, available: index >= 50 ? true : false });
      } array.push(subArray);
        subArray = [];
    } setBoard(array);
  };

  const handlePickSquare = (numOne, numTwo) => {
    let newBoard = [...board];
    newBoard[numOne][numTwo].selected = playerTurn;
    setBoard(newBoard);
    // setPlayerTurn(playerTurn == 1 ? setPlayerTurn(2) : setPlayerTurn(1));
  };

  useEffect(() =>{
    makeBoard();
  }, []);

  return (
    <StyledConnectFour>
      <FourBoard onSelect={handlePickSquare} board={board} />
    </StyledConnectFour>
  )
};

export default ConnectFour;