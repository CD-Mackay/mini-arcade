/* Library Imports */
import React from 'react';


/* Component Imports */
import { Link } from 'react-router-dom';

/* Asset Imports */
import StyledTutorialHeader from './StyledTutorialHeader';
import { FaQuestionCircle } from 'react-icons/fa';
import TutorialText from '../../../utilities/TutorialText';

const TutorialHeader = ({game}) => {

  const { text } = TutorialText;

  const links = text.map((element, index) => {
    return <Link key={index} to={`/${element.game}/tutorial`}>
      {element.title}
    </Link>
  });

  return (
    <StyledTutorialHeader>
      {game && <Link to={`/${game}/tutorial`}>
        <FaQuestionCircle fontSize="24px" color="#00FFFF" />
      </Link>}
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
