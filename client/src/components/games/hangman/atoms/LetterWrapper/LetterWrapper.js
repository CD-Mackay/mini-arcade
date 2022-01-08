// Library Imports
import React, { useState } from 'react';

// Component Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter}) => {

  const [displayLetter, setDisplayLetter] = useState(false);

  return (
    <StyledLetterWrapper display={displayLetter.toString()}>
      <div>
       <p> {letter}</p>
        </div>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;