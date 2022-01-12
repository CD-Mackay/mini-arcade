// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';
import Button from '../../../../atoms/Button/Button';


const TextInput = ({setInput, input, onSubmit}) => {

  const handleSetInput = (value) => {
    const newInput = value.slice(-1);
    setInput("");
    setInput(newInput);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  }

  return (
    <StyledTextInput>
      <form onSubmit={(event) => handleFormSubmit(event)}>
      <input placeholder="guess a letter" type="text" value={input} onChange={(event) => handleSetInput(event.target.value)} />
      <Button message="Ready?" onClick={onSubmit} />
      </form>
    </StyledTextInput>
  )
};

export default TextInput;