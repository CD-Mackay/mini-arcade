import React, { useState } from 'react';

import StyledThrowSelect from './StyledThrowSelect';

import Button from '../../../../atoms/Button/Button';

const ThrowSelect = ({input, setInput}) => {



  return (
    <StyledThrowSelect>
        <Button message="rock" onClick={(event) => setInput(event.target.innerHTML)} />
        <Button message="paper" onClick={(event) => setInput(event.target.innerHTML)} />
        <Button message="scissors" onClick={(event) => setInput(event.target.innerHTML)} />
    </StyledThrowSelect>
  )
};

export default ThrowSelect;