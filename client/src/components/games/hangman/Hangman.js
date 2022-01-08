// Library Imports
import React, { useEffect, useState } from 'react';
import TextInput from './atoms/TextInput/TextInput';
import WordWrapper from './atoms/WordWrapper/WordWrapper';

// Component Imports
import StyledHangman from './StyledHangman';

const Hangman = () => {

  const strings = ["ubiquitous", "mendacious", "polyglottal", "grapefruit", "donkey", "swamp", "indigenous", "inexpensive"];

  const [gameString, setGameString] = useState("");
  const [input, setInput] = useState("");

  const pickString = () => {
    const max = Math.floor(strings.length);
    const index = Math.floor(Math.random() * (max));
    setGameString(strings[index]);
  };

  const startGame = () => {
    pickString();
  };

  useEffect(() => {
    startGame();
  }, []);

  const handlePickLetter = () => {
    let string = gameString.split('');
    for (const element of string) {
      if (element == input) {
        console.log("true");
        return true;
      }
    } console.log("false");
    return false;
  };


  return (
    <StyledHangman>
      <p>I am Hangman</p>
      <WordWrapper string={gameString} />
      <TextInput setInput={setInput} input={input} onSubmit={handlePickLetter} />
    </StyledHangman>
  )
};

export default Hangman;