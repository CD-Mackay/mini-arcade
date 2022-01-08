// Library Imports
import React, { useEffect, useState } from 'react';
import TextInput from './atoms/TextInput/TextInput';
import WordWrapper from './atoms/WordWrapper/WordWrapper';

// Component Imports
import StyledHangman from './StyledHangman';

const Hangman = () => {

  const strings = ["ubiquitous", "mendacious", "polyglottal", "grapefruit", "donkey", "swamp", "indigenous", "inexpensive"];

  const [gameString, setGameString] = useState("");
  const [input, setInput] = useState([]);

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

  useEffect(() => {
    startGame();
  }, []);

  const validateLetter = () => {
    let string = gameString.split('');
    for (const element of string) {
      if (element == input) {
        return true;
      }
    }  return false;
  };


  return (
    <StyledHangman>
      <p>I am Hangman</p>
      <WordWrapper string={gameString} />
      <TextInput setInput={setInput} input={input} onSubmit={validateLetter} />
    </StyledHangman>
  )
};

export default Hangman;