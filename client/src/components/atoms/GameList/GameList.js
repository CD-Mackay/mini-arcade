/* Library Imports */
import React from 'react';


/* Component Imports */
import GameListItem from '../GameListItem/GameListItem';

/* Asset Imports */
import StyledGameList from './StyledGameList';

const GameList = () => {
  return (
    <StyledGameList>
      <div className="game-wrapper">
        <GameListItem game="tictactoe" />
        <GameListItem game="hangman" />
        <GameListItem game="rockpaperscissors" />
        <GameListItem />
        <GameListItem />
        <GameListItem />
    </div>
    </StyledGameList>
  )
};

export default GameList;