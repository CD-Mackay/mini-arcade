import React from 'react';

import StyledButton from './StyledButton';

const Button = ({onClick, message}) => {
  return (
    <StyledButton>
      <button onClick={onClick}>{message}</button>
    </StyledButton>
  )
};

export default Button;