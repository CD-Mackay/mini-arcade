import React, { useEffect, useState } from 'react';

import StyledOpponentThrow from './StyledOpponentThrow';

const OpponentThrow = ({timer, winner}) => {

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (timer !== 0) {
      setOpacity(1);
      setTimeout(() => {
        setOpacity(0)
      }, 800)
    }
  }, [timer, winner]);
  return (
    <StyledOpponentThrow opacity={opacity} >
      <p>{timer}</p>
      {winner && <h1>{winner} wins!</h1>}
    </StyledOpponentThrow>
  )
};

export default OpponentThrow;