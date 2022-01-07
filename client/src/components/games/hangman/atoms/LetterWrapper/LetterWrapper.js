// Library Imports
import React from 'react';

// Component Imports
import StyledLetterWrapper from './StyledLetterWrapper';

const LetterWrapper = ({letter}) => {
  return (
    <StyledLetterWrapper>
      <div>
       <p> {letter}</p>
        </div>
    </StyledLetterWrapper>
  )
};

export default LetterWrapper;