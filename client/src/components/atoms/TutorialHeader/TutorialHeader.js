/* Library Imports */
import React from 'react';


/* Component Imports */
import { Link, useLocation } from 'react-router-dom';

/* Asset Imports */
import StyledTutorialHeader from './StyledTutorialHeader';
import { FaQuestionCircle } from 'react-icons/fa';
import TutorialText from '../../../utilities/TutorialText';

const TutorialHeader = ({game}) => {

  const { text } = TutorialText;

  let location = useLocation();

  const links = text
  .filter((element) => !location.pathname.includes(element.game))
  .map((element, index) => {
    return <Link key={index} to={`/${element.game}/tutorial`}>
      {element.title}
    </Link>
  });

  return (
    <StyledTutorialHeader>
      {!game && 
      <div>
        <p>Other Tutorials:</p>
        {links}
      </div>
      }
    </StyledTutorialHeader>
  )
};

export default TutorialHeader;
