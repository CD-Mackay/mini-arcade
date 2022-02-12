/* Library Imports */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


/* Component Imports */

/* Asset Imports */
import StyledTutorial from './StyledTutorial';
import TutorialText from '../../../utilities/TutorialText';

const Tutorial = () => {

  let { game } = useParams();

  const [instructions, setInstructions] = useState({});

  const { text } = TutorialText;

  useEffect(() => {
    for (let element of text) {
      if (element.game === game) {
        setInstructions(element);
      }
    }
  }, []);

  return (
    <StyledTutorial>
      <div>
        <h4>Introduction</h4>
        <p>{instructions.introduction}</p>
      </div>
      <div>
        <h4>Rules</h4>
        <p>{instructions.rules}</p>
      </div>
      <div>
        <h4>Strategy</h4>
        <p>{instructions.strategy}</p>
      </div>
      <div>
        <h4>Be warned</h4>
        <p>{instructions.pitfalls}</p>
      </div>
    </StyledTutorial>
  )
};

export default Tutorial;