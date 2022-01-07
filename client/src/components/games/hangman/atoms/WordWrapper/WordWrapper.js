// Library Imports
import React from 'react';

// Component Imports
import StyledWordWrapper from './StyledWordWrapper';
import LetterWrapper from '../LetterWrapper/LetterWrapper';

const WordWrapper = ({string}) => {

  const renderString = (string) => {
    if (string !== "") {
      return string
      .split('')
      .map((element, index) => {
        return <LetterWrapper key={index} letter={element} />
      })
    }
  };

  return (
    <StyledWordWrapper>
      {renderString(string)}
    </StyledWordWrapper>
  )
};

export default WordWrapper;