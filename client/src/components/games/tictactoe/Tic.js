import React, { useState } from 'react';

import StyledTic from './StyledTic';

const Tic = () => {

  const [gamePhase, setGamePhase] = useState("setup");


  const startGame = () => {

  }
  return (
    <StyledTic>
      {gamePhase === "setup" &&
      <div id="setup-box">
        <h4>Select Human or Robotic Opponent</h4>
        <div id="button-wrapper">
          <button>human</button>
          <button>robot</button>
        </div>
      </div>
      }
      {gamePhase === "play" && <div>
        <h4>The Game is Afoot!</h4>
      </div>}
    </StyledTic>
  )
};

export default Tic;