import React from 'react';

import StyledAlert from './StyledAlert';

const Alert = ({visible, message, color}) => {

  return (
    <StyledAlert color={color} visible={show}>
      <p>{message}</p>
    </StyledAlert>
  )
};

export default Alert;