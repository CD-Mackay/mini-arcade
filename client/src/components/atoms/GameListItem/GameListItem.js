/* Library Imports */
import React from 'react';
import { Link } from 'react-router-dom';

/* Component Imports */

/* Asset Imports */
import StyledGameListItem from './StyledGameListItem';

const GameListItem = ({game}) => {
  return (
    <StyledGameListItem>
      <image src="" alt="game-image" />
      <Link to={`/${game}`}>
        <h4>I am {game}</h4>
      </Link>
    </StyledGameListItem>
  )
};

export default GameListItem;