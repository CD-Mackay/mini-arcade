/* Library Imports */
import React from 'react';


/* Component Imports */
import GameListItem from '../GameListItem/GameListItem';

/* Asset Imports */
import StyledGameList from './StyledGameList';
import { GiTicTacToe, GiDoubleFaceMask, GiTriforce } from 'react-icons/gi';
import { BiCategory } from 'react-icons/bi';

const GameList = () => {
  return (
    <StyledGameList>
      <div className="game-wrapper">
        <GameListItem 
        game="tictactoe" 
        name="Tic-Tac-Toe"
        description="Simple, classic, your child can probably beat you. "
        icon={<GiTicTacToe color={"#00FFFF"} fontSize="48px" />} />
        <GameListItem 
        game="hangman" 
        name="Hangman" 
        description="Slightly morbid, good for vocabulistics"
        icon={<GiDoubleFaceMask color={"#00FFFF"} fontSize="48px" />}
        />
        <GameListItem 
        game="rockpaperscissors" 
        name="Rock Paper Scissors" 
        description="For those who can't do."
        icon={<GiTriforce color={"#00FFFF"} fontSize="48px" />}
        />
        <GameListItem 
        game="connectfour" 
        name="Connect Four" 
        description="Because counting to 5 is hard."
        icon={<BiCategory color={"#00FFFF"} fontSize="32px" />}
         />
        <GameListItem 
        game="snake" 
        name="Snake" 
        description="snaaaake it's a snaaake"
        />
        <GameListItem />
    </div>
    </StyledGameList>
  )
};

export default GameList;