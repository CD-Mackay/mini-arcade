import React, { useState } from 'react';

import StyledThrowSelect from './StyledThrowSelect';

import Button from '../../../../atoms/Button/Button';

const ThrowSelect = ({input, setInput}) => {



  return (
    <StyledThrowSelect input={input}>
      <div id="rock">
        <Button  message="rock" onClick={(event) => setInput(event.target.innerHTML)} />
      </div>
      <div id="paper">
        <Button  message="paper" onClick={(event) => setInput(event.target.innerHTML)} />
      </div>
      <div id="scissors">
        <Button  message="scissors" onClick={(event) => setInput(event.target.innerHTML)} />
      </div>
    </StyledThrowSelect>
  )
};

export default ThrowSelect;