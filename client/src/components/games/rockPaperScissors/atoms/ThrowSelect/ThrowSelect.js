import React, { useState } from 'react';

import StyledThrowSelect from './StyledThrowSelect';

const ThrowSelect = ({input, setInput}) => {



  return (
    <StyledThrowSelect>
      <div >
        <div>
          <input 
          type="radio" 
          name="throw-select" 
          value="rock"
          onChange={(event) => setInput(event.target.value)} 
          />
          <label htmlFor="rock">rock</label>
        </div>
        <div>
        <input 
        type="radio" 
        name="throw-select" 
        value="paper" 
        onChange={(event) => setInput(event.target.value)} 
        />
        <label htmlFor="paper">paper</label>
        </div>
        <div>
        <input 
        type="radio" 
        name="throw-select" 
        value="scissors"
        onChange={(event) => setInput(event.target.value)} 
         />
        <label htmlFor="scissors">scissors</label>
        </div>
      </div>
    </StyledThrowSelect>
  )
};

export default ThrowSelect;