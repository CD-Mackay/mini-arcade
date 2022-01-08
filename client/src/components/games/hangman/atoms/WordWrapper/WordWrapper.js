// Library Imports
import React from 'react';

// Component Imports
import StyledWordWrapper from './StyledWordWrapper';
import LetterWrapper from '../LetterWrapper/LetterWrapper';

const WordWrapper = ({string}) => {

  const renderString = (string) => {
    if (string !== "") {
      return string
      .map((element, index) => {
        return <LetterWrapper key={index} letter={element.value} selected={element.selected} />
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