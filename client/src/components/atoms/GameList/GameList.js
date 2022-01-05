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
        <GameListItem game="tictactoe" name="Tic-Tac-Toe" />
        <GameListItem game="hangman" name="Hangman" />
        <GameListItem game="rockpaperscissors" name="Rock Paper Scissors" />
        <GameListItem />
        <GameListItem />
        <GameListItem />
    </div>
    </StyledGameList>
  )
};

export default GameList;