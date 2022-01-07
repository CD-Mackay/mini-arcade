// Library Imports
import React from 'react';
import TextInput from './atoms/TextInput/TextInput';

// Component Imports
import StyledHangman from './StyledHangman';

const Hangman = () => {
  return (
    <StyledHangman>
      <p>I am Hangman</p>
      <TextInput />
    </StyledHangman>
  )
};

export default Hangman;