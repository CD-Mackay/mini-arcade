// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';


const TextInput = ({setInput}) => {


  return (
    <StyledTextInput>
      <input type="text" onChange={(event) => setInput(event.target.value)} />
    </StyledTextInput>
  )
};

export default TextInput;