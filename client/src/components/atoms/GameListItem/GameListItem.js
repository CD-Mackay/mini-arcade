/* Library Imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component Imports */

/* Asset Imports */
import StyledGameListItem from './StyledGameListItem';

const GameListItem = ({game, name, description}) => {
  return (
    <StyledGameListItem>
      <Link to={`/${game}`}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </StyledGameListItem>
  )
};

export default GameListItem;