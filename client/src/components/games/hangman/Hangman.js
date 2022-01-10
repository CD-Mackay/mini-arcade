// Library Imports
import React, { useEffect, useState } from 'react';

// Component Imports
import StyledHangman from './StyledHangman';
import Button from '../../atoms/Button/Button';
import TextInput from './atoms/TextInput/TextInput';
import WordWrapper from './atoms/WordWrapper/WordWrapper';

const Hangman = () => {

  const strings = ["ubiquitous", "mendacious", "polyglottal", "grapefruit", "donkey", "swamp", "indigenous", "inexpensive"];

  const [gameString, setGameString] = useState([]);
  const [input, setInput] = useState("");
  const [gamePhase, setGamePhase] = useState("play");
  const [failedGuesses, setFailedGuesses] = useState(0);

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
    setGamePhase("play");
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
        console.log(incrementer, gameString.length)
      } 
    } if (incrementer == gameString.length) {
      console.log("you have won!");
      setGamePhase("finished");
      return true;
    } else {
      return false;
    }
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
      let guesses = failedGuesses;
      console.log(guesses);
      guesses++;
      setFailedGuesses(guesses);
      setInput("");
    }
  };


  useEffect(() => {
    startGame();
  }, []);


  return (
    <StyledHangman>
        <div id="game-wrapper">
          <h4>Welcome to HangMan!</h4>
          <WordWrapper string={gameString} />
          <TextInput setInput={setInput} input={input} onSubmit={handleTurn} />
          <div id="finished-menu">
            <Button message="New Game" onClick={resetGame} />
            <Button message="Back to Home"  />
          </div>
        </div>
      
    </StyledHangman>
  )
};

export default Hangman;