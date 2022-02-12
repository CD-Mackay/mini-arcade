/* Library Imports */
import React from 'react';


/* Component Imports */
import { Link } from 'react-router-dom';

/* Asset Imports */
import StyledTutorialHeader from './StyledTutorialHeader';
import { FaQuestionCircle } from 'react-icons/fa';

const TutorialHeader = ({game}) => {

  return (
    <StyledTutorialHeader>
      <Link to={`${game}/tutorial`}>
        <FaQuestionCircle fontSize="24px" color="#00FFFF" />
      </Link>
    </StyledTutorialHeader>
  )
};

export default TutorialHeader;
