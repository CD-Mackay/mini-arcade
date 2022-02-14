/* Library Imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component Imports */

/* Asset Imports */
import StyledGameListItem from './StyledGameListItem';
import { FaQuestionCircle } from 'react-icons/fa';

const GameListItem = ({game, name, description, icon}) => {
  return (
    <StyledGameListItem>
      <Link to={`/${game}`}>
        <h4>{name}</h4>
        <p>{description}</p>
        {icon ? icon : ""}
      </Link>
    </StyledGameListItem>
  )
};

export default GameListItem;