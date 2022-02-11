/* Library Imports */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';


/* Component Imports */

/* Asset Imports */
import StyledTutorial from './StyledTutorial';

const Tutorial = () => {

  let { game } = useParams();

  const [instructions, setInstructions] = useState({});

  console.log(game);
  return (
    <StyledTutorial>
      <h1>I am Tutorial</h1>
    </StyledTutorial>
  )
};

export default Tutorial;