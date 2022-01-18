// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';
import Button from '../../../../atoms/Button/Button';


const TextInput = ({setInput, input, onSubmit}) => {

  let regex = /[a-zA-Z]/;

  const [error, setError] = useState(false);

  const handleSetInput = (value) => {
    const newInput = value.slice(-1);
    if (regex.test(newInput)) {
      setInput("");
      setInput(newInput);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <StyledTextInput>
      <form onSubmit={() => handleFormSubmit(event)}>
      <input placeholder="guess a letter" type="text" value={input} onChange={(event) => handleSetInput(event.target.value)} />
      </form>
    </StyledTextInput>
  )
};

export default TextInput;