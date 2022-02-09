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
    if (newBoard[numOne][numTwo].available == true) {
      newBoard[numOne][numTwo].selected = playerTurn;
      newBoard[numOne][numTwo].available = false;
     // console.log(newBoard[numOne][numTwo])
      setBoard(newBoard);
      let validatedBoard = checkForValidSquares(board);
      setBoard(validatedBoard);
      if (playerTurn === 1) {
        setPlayerTurn(2);
      } else {
        setPlayerTurn(1)
      }  
    } else {
      console.log("not available!")
    }
  };

  const checkForValidSquares = (array) => {
    let arrayCopy = [...array];
      for (let i = arrayCopy.length - 1; i >= 0; i--) {
        for (let x = arrayCopy[i].length - 1; x >= 0; x--) {
          if (i > 0) {
            let bottomSquare = arrayCopy[i][x];
            let topSquare = arrayCopy[i - 1][x];
            if (bottomSquare.selected !== 0) {
              topSquare.available = true;
            }
          }
        }
    } return arrayCopy;
  };

  const checkForVerticalWin = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let x = array[i].length - 1; x >=0; x--) {
        if (i - 3 > 0) {
          let firstSquare = array[i][x];
          let secondSquare = array[i - 1][x];
          let thirdSquare = array[i - 2][x];
          let fourthSquare = array[i - 3][x];
          //console.log(firstSquare, secondSquare, thirdSquare, fourthSquare);
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            console.log("winner!")
          }
        }
      }
    }
  };

 const checkForHorizontalWin = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let x = array[i].length - 1; x >=0; x--) {
        if (x - 3 > 0) {
          let firstSquare = array[i][x];
          let secondSquare = array[i][x - 1];
          let thirdSquare = array[i][x - 2];
          let fourthSquare = array[i][x - 3];
          //console.log(firstSquare, secondSquare, thirdSquare, fourthSquare);
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            console.log("winner!")
          }
        }
      }
    }
  }

  useEffect(() =>{
    makeBoard();
  }, []);

  useEffect(() => {
    checkForValidSquares(board);
    checkForVerticalWin(board);
    checkForHorizontalWin(board);
}, [board]);



  return (
    <StyledConnectFour>
      <FourBoard onSelect={handlePickSquare} board={board} />
    </StyledConnectFour>
  )
};

export default ConnectFour;