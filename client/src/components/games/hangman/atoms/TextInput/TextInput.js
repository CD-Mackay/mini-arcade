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
      if (error) {
        setError(false);
      }
      setInput("");
      setInput(newInput);
      return true;
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
      return false;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.firstChild.value);
    if (handleSetInput(event.target.firstChild.value)) {
      onSubmit();
    } else {
      setError(true)
    }
  };

  return (
    <StyledTextInput error={error}>
      <form onSubmit={() => handleFormSubmit(event)}>
        <input placeholder="guess a letter" type="text" value={input} onChange={(event) => handleSetInput(event.target.value)} />
        <div>
          <p id="error">Not a lettter! </p>
        </div>
      </form>
    </StyledTextInput>
  )
};

export default TextInput;