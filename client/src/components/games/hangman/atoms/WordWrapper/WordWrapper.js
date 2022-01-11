// Library Imports
import React, { useEffect } from 'react';

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
      <p>
      {renderString(string)}
      </p>
    </StyledWordWrapper>
  )
};

export default WordWrapper;