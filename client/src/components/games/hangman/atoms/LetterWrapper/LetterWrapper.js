// Library Imports
import React, { useEffect, useState } from 'react';

// Component Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter, selected}) => {

  const [displayLetter, setDisplayLetter] = useState(selected);

  useEffect(() => {
    setDisplayLetter(selected);
  }, [selected]);

  return (
    <StyledLetterWrapper display={displayLetter.toString()}>
       <p>{letter}</p>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;