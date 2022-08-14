// Library Imports
import React, { useEffect, useState } from "react";

// Asset Imports
import { GiMailedFist, GiPalm } from "react-icons/gi";
import { FaRegHandScissors } from "react-icons/fa";

// CSS Imports
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
        {display === "rock" && (
          <div className="throw">
            <GiMailedFist fontSize="36px" id="rock" />
            <span>{display}</span>
          </div>
        )}
        {display === "paper" && (
          <div className="throw">
            <GiPalm fontSize="36px" id="paper" />
            <span>{display}</span>
          </div>
        )}
        {display === "scissors" && (
          <div className="throw">
            <FaRegHandScissors fontSize="36px" id="scissors" />
            <span>{display}</span>
          </div>
        )}
      </div>
    </StyledOpponentThrow>
  );
};

export default OpponentThrow;
