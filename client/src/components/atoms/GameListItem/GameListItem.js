/* Library Imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component Imports */

/* Asset Imports */
import StyledGameListItem from './StyledGameListItem';

const GameListItem = ({game, name}) => {
  return (
    <StyledGameListItem>
      <Image src="" alt="game-image" />
      <Link to={`/${game}`}>
        <h4>{name}</h4>
      </Link>
    </StyledGameListItem>
  )
};

export default GameListItem;