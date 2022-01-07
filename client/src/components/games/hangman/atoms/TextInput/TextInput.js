// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledTextInput from './StyledTextInput';


const TextInput = () => {

  const [input, setInput] = useState(null);

  return (
    <StyledTextInput>
      <input type="text" maxlength="1" onChange={(event) => setInput(event.target.value)} />
    </StyledTextInput>
  )
};

export default TextInput;