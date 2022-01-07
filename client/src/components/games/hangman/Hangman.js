// Library Imports
import React, { useState } from 'react';
import TextInput from './atoms/TextInput/TextInput';

// Component Imports
import StyledHangman from './StyledHangman';

const Hangman = () => {

  const [input, setInput] = useState("");



  return (
    <StyledHangman>
      <p>I am Hangman</p>
      <TextInput setInput={setInput} input={input} />
    </StyledHangman>
  )
};

export default Hangman;