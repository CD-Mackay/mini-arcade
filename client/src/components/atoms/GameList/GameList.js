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
        <GameListItem 
        game="tictactoe" 
        name="Tic-Tac-Toe"
        description="Simple, classic, your child can probably beat you. " />
        <GameListItem 
        game="hangman" 
        name="Hangman" 
        description="Slightly morbid, good for vocabulistics"
        />
        <GameListItem 
        game="rockpaperscissors" 
        name="Rock Paper Scissors" 
        description="For those who can't do"/>
        <GameListItem />
        <GameListItem />
        <GameListItem />
    </div>
    </StyledGameList>
  )
};

export default GameList;