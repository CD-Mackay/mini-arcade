// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';


const TextInput = ({setInput, input, onSubmit}) => {

  const handleSetInput = (value) => {
    const newInput = value.slice(-1);
    setInput("");
    setInput(newInput);
  }

  return (
    <StyledTextInput>
      <input type="text" value={input} onChange={(event) => handleSetInput(event.target.value)} />
      <button onClick={onSubmit}>hello</button>
    </StyledTextInput>
  )
};

export default TextInput;