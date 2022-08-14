
/* Library Imports */
import React, { useState } from 'react';


/* Component Imports */
import Button from '../../../../atoms/Button/Button';

/* Asset Imports */
import StyledCustomInput from './StyledCustomInput';

const CustomInput = ({string, setString, onSubmit}) => {

  const regex = /[a-zA-Z]/;

  const [error, setError ] = useState(false);

  const handleSetInput = (value) => {
    const newInput = value;
    if (regex.test(newInput)) {
      if (error) {
        setError(false);
      }
      setString("");
      setString(newInput);
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
    if (handleSetInput(event.target.firstChild.value)) {
      onSubmit();
    } else {
      setError(true)
    }
  };

  /**
   * Custom Input allows the user to enter their word when playing Hangman against another person
   * Prevents users from entering anything other than letters (e.g. No numbers/special characters)
   */

  return (
    <StyledCustomInput>
      <h4>
        Enter your mystery word
      </h4>
      <form onSubmit={() => handleFormSubmit(event)}>
        <input type="text" onChange={event => handleSetInput(event.target.value)} value={string} />
        <Button onClick={(event) => handleFormSubmit(event)} message="Start Game" />
      </form>
    </StyledCustomInput>
  )
};

export default CustomInput;