// Library Imports
import React from 'react';


// Component Imports */
import GameList from '../../atoms/GameList/GameList';
// Asset Imports
import StyledHome from './StyledHome';

const Home = () => {
  return (
    <StyledHome>
      <GameList />
    </StyledHome>
  )
};

export default Home;