import React, { useEffect, useState } from "react";
import { GiMailedFist, GiPalm } from "react-icons/gi";
import { FaRegHandScissors } from "react-icons/fa";

import StyledOpponentThrow from "./StyledOpponentThrow";

const OpponentThrow = ({ timer, winner, display }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (timer !== 0) {
      setOpacity(1);
      setTimeout(() => {
        setOpacity(0);
      }, 800);
    }
  }, [timer, winner]);
  return (
    <StyledOpponentThrow opacity={opacity}>
      <div>
        <p>{timer}</p>
        {winner ? (
          <h1>{winner === "draw" ? "DRAW!" : `${winner} wins!`}</h1>
        ) : (
          <h1> </h1>
        )}
        {display === "rock" && <GiMailedFist fontSize="36px" id="rock" />}
        {display === "paper" && <GiPalm fontSize="36px" id="paper" />}
        {display === "scissors" && (
          <FaRegHandScissors fontSize="36px" id="scissors" />
        )}
      </div>
    </StyledOpponentThrow>
  );
};

export default OpponentThrow;
