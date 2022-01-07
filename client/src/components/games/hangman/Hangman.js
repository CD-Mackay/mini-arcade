// Library Imports
import React, { useState } from 'react';
import TextInput from './atoms/TextInput/TextInput';

// Component Imports
import StyledHangman from './StyledHangman';

const Hangman = () => {

  const [input, setInput] = useState(null);



  return (
    <StyledHangman>
      <p>I am Hangman</p>
      <TextInput setInput={setInput} />
    </StyledHangman>
  )
};

export default Hangman;