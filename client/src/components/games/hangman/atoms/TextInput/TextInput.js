// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';


const TextInput = ({setInput, input}) => {

  const handleSetInput = (value) => {
    const newInput = value.slice(-1);
    setInput("");
    setInput(newInput);
  }

  return (
    <StyledTextInput>
      <input type="text" value={input} onChange={(event) => handleSetInput(event.target.value)} />
    </StyledTextInput>
  )
};

export default TextInput;