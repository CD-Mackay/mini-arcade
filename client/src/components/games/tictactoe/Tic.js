import React, { useState } from 'react';
import GameSquare from './atoms/gameSquare/GameSquare';

import StyledTic from './StyledTic';

const Tic = () => {

  const [gamePhase, setGamePhase] = useState("setup");
  const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const gameBoard =  squares.map((element) => {
      return <GameSquare index={element} />
    });

  return (
    <StyledTic>
      {gamePhase === "setup" &&
      <div id="setup-box">
        <h4>Select Human or Robotic Opponent</h4>
        <div id="button-wrapper">
          <button onClick={() => setGamePhase("play")}>human</button>
          <button>robot</button>
        </div>
      </div>
      }
      {gamePhase === "play" && <div>
        <h4>The Game is Afoot!</h4>
        <div className="game-grid">
          {gameBoard}
        </div>
      </div>}
    </StyledTic>
  )
};

export default Tic;