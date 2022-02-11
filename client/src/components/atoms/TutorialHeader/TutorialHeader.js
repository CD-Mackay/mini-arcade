/* Library Imports */
import React from 'react';


/* Component Imports */
import { Link } from 'react-router-dom';

/* Asset Imports */
import StyledTutorialHeader from './StyledTutorialHeader';

const TutorialHeader = ({game}) => {

  return (
    <StyledTutorialHeader>
      <Link to={`${game}/tutorial`}>
        Tutorial
      </Link>
    </StyledTutorialHeader>
  )
};

export default TutorialHeader;
