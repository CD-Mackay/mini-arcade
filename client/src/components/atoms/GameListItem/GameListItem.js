// Library Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Asset Imports
import StyledGameListItem from './StyledGameListItem';

const GameListItem = ({game, name, description, icon}) => {

  /**
   * Component to display individual game
   * * Child component of <GameList />
   */
  return (
    <StyledGameListItem>
      <Link to={`/${game}`}>
        <div className="game-grid">
          <div className="grid-text">
        <h4>{name}</h4>
        <p>{description}</p>
          </div>
          <div className="grid-icon">
          {icon ? icon : ""}
          </div>
        </div>
      </Link>
    </StyledGameListItem>
  )
};

export default GameListItem;