// Library Imports
import React, { useEffect, useState } from 'react';

// Component Imports
import StyledHangman from './StyledHangman';
import Button from '../../atoms/Button/Button';
import TextInput from './atoms/TextInput/TextInput';
import WordWrapper from './atoms/WordWrapper/WordWrapper';
import DisplayWrong from './atoms/DisplayWrong/DisplayWrong';
import { Link } from 'react-router-dom';


const Hangman = () => {

  const strings = ["ubiquitous", "mendacious", "polyglottal", "grapefruit", "donkey", "swamp", "indigenous", "inexpensive"];

  const [gameString, setGameString] = useState([]);
  const [input, setInput] = useState("");
  const [gamePhase, setGamePhase] = useState("play");
  const [failedGuesses, setFailedGuesses] = useState([]);

  const pickString = () => {
    const max = Math.floor(strings.length);
    const index = Math.floor(Math.random() * (max));
    const string = strings[index];
    const stringObject = string
      .split('')
      .map((element) => {
        return { value: element, selected: false }
      })
    setGameString(stringObject);
  };

  const startGame = () => {
    pickString();
  };

  const resetGame = () => {
    startGame();
  }

  const validateLetter = () => {
    for (const element of gameString) {
      if (element.value == input) {
        return true;
      }
    }  return false;
  };

  const checkForWin = () => {
    let incrementer = 0;
    for (const element of gameString) {
      if (element.selected == true) {
        incrementer++;
      } 
    } if (incrementer == gameString.length) {
      console.log("you have won!");
      setGamePhase("win");
      return true;
    } else {
      return false;
    }
  };

  const checkForLoss = (guesses) => {
    if (guesses.length > 5) {
      console.log("you loser")
      setGamePhase("loss");
      return true;
    } return false;
  }

  const handleTurn = () => {
    if (validateLetter()) {
      let newGameString = [...gameString];
      for (const letter of newGameString) {
        if (letter.value == input) {
          letter.selected = true;
        }
      } setGameString(newGameString);
      setInput("");
      checkForWin();
    } else {
      let guesses = [...failedGuesses];
      guesses.push(input);
      setFailedGuesses(guesses);
      setInput("");
      checkForLoss(guesses);
    }
  };


  useEffect(() => {
    startGame();
  }, []);


  return (
    <StyledHangman>
        <div id="game-wrapper">
          <h4>Welcome to HangMan!</h4>
          <h5>{gamePhase == "win" && "Congratulations!"}</h5>
          <h5>{gamePhase == "loss" && "You have been hanged"}</h5>
          <WordWrapper string={gameString} />
          <TextInput setInput={setInput} input={input} onSubmit={handleTurn} />
          <div id="finished-menu">
            <Button message="New Game" onClick={resetGame} />
            <Link to="/">
              <Button message="Back to Home"  />
            </Link>
          </div>
          <div id="letter-graveyard">
            <DisplayWrong wrong={failedGuesses} />
          </div>
        </div>
      
    </StyledHangman>
  )
};

export default Hangman;