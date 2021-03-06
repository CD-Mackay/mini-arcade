
/* Library Imports */
import React, { useState } from 'react';


/* Component Imports */
import Button from '../../../../atoms/Button/Button';

/* Asset Imports */
import StyledCustomInput from './StyledCustomInput';

const CustomInput = ({string, setString, onSubmit}) => {

  let regex = /[a-zA-Z]/;

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