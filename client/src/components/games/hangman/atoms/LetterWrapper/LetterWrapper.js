// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter, selected}) => {

  const [displayLetter, setDisplayLetter] = useState(selected);

  return (
    <StyledLetterWrapper display={displayLetter.toString()}>
      <div>
       <p> {letter}</p>
        </div>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;