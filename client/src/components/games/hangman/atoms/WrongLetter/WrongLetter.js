import React from 'react';

import StyledWrongLetter from './StyledWrongLetter';

const WrongLetter = ({letter, display}) => {

  return (
    <StyledWrongLetter display={display}>
      <p>{letter}</p>
    </StyledWrongLetter>
  )
};

export default WrongLetter;