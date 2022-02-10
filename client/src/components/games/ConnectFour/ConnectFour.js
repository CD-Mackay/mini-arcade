/* Library Imports */
import { set } from 'mongoose';
import React, { useState, useEffect } from 'react';


/* Component Imports */
import FourBoard from './atoms/FourBoard/FourBoard';
import ScoreKeeper from '../../atoms/ScoreKeeper/ScoreKeeper';

/* Asset Imports */
import StyledConnectFour from './StyledConnectFour';
import UpdateRecords from '../../../utilities/UpdateRecords';

const ConnectFour = () => {

  const [board, setBoard] = useState([]);
  const [playerTurn, setPlayerTurn] = useState(1);
  const [winner, setWinner] = useState(0);
  const [record, setRecord] = useState({player_one: 0, player_two: 0, draw: 0});

  const { handleUpdateRecord } = UpdateRecords;

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
      setBoard(newBoard);
      let validatedBoard = checkForValidSquares(board);
      setBoard(validatedBoard);
      if (playerTurn === 1) {
        setPlayerTurn(2);
      } else {
        setPlayerTurn(1)
      }  
    } else {
      console.log("not available!");
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
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            setWinner(playerTurn);
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
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            setWinner(playerTurn);
          }
        }
      }
    }
  };

  const checkForAscendingWin = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let x = array[i].length - 1; x >=0; x--) {
        if (x - 3 > 0 && i - 3 > 0) {
          let firstSquare = array[i][x];
          let secondSquare = array[i - 1][x - 1];
          let thirdSquare = array[i - 2][x - 2];
          let fourthSquare = array[i - 3][x - 3];
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            setWinner(playerTurn);
          }
        }
      }
    }
  };

  const checkForDescendingWin = (array) => {
    for (let i = array.length - 1; i >= 0; i--) {
      for (let x = array[i].length - 1; x >=0; x--) {
        if (x + 3 < array[i].length && i - 3 > 0) {
          let firstSquare = array[i][x];
          let secondSquare = array[i - 1][x + 1];
          let thirdSquare = array[i - 2][x + 2];
          let fourthSquare = array[i - 3][x + 3];
          if ((firstSquare.selected === secondSquare.selected) && (secondSquare.selected === thirdSquare.selected) && (thirdSquare.selected === fourthSquare.selected) && (firstSquare.selected !== 0)) {
            setWinner(playerTurn);
          }
        }
      }
    }
  };

  useEffect(() =>{
    makeBoard();
  }, []);

  useEffect(() => {
    checkForValidSquares(board);
    checkForVerticalWin(board);
    checkForHorizontalWin(board);
    checkForAscendingWin(board);
    checkForDescendingWin(board);
}, [board]);

useEffect(() => {
  winner === 1 ? setRecord(handleUpdateRecord("player_one", record)) : setRecord(handleUpdateRecord("player_two", record));
}, [winner]);



  return (
    <StyledConnectFour>
      <div>
        <h4>Connect Four!</h4>
      <FourBoard onSelect={handlePickSquare} board={board} winner={winner}/>
      </div>
      <ScoreKeeper record={record} />
    </StyledConnectFour>
  )
};

export default ConnectFour;