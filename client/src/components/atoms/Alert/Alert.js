import React from 'react';

import StyledAlert from './StyledAlert';

const Alert = ({visible, message, color}) => {

  return (
    <StyledAlert color={color} visible={visible}>
      <p>{message}</p>
    </StyledAlert>
  )
};

export default Alert;