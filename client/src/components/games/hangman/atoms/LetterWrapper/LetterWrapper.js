// Library Imports
import React, { useEffect, useState } from 'react';

// Component Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter, selected, length}) => {

  const [displayLetter, setDisplayLetter] = useState(selected);

  useEffect(() => {
    setDisplayLetter(selected);
  }, [selected]);

  return (
    <StyledLetterWrapper length={length} display={displayLetter.toString()}>
      <span>
        {letter}
      </span>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;