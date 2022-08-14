// Library Imports
import React, { useEffect, useState } from 'react';

// CSS Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter, selected, length}) => {

  const [displayLetter, setDisplayLetter] = useState(selected);

  useEffect(() => {
    setDisplayLetter(selected);
  }, [selected]);

  /**
   * Component to display correctly guessed letters in Hangman mytery word
   */
  return (
    <StyledLetterWrapper length={length} display={displayLetter.toString()}>
      <span>
        {letter}
      </span>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;