// Library Imports
import React from 'react';
import { Link, useLocation } from 'react-router-dom';


// Asset Imports
import TutorialText from '../../../utilities/TutorialText';

// CSS Imports
import StyledTutorialHeader from './StyledTutorialHeader';


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

  /**
   * Component to allow user to switch between different tutorials
   */

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
