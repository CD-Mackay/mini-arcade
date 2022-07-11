import React from "react";
import { GiMailedFist, GiPalm } from "react-icons/gi";
import { FaRegHandScissors } from "react-icons/fa";

import StyledRenderThrow from "./StyledRenderThrow";

const RenderThrow = ({ move }) => {
  // const shownThrow = (input) => {
  //   let icon = null;
  //   input === "rock" ?
  //   icon = <GiMailedFist fontSize="36px" id="rock" />
  //   : input === "paper" ? icon = <GiPalm fontSize="36px" id="paper" />
  //   : input === "scissors" ? icon = <FaRegHandScissors fontSize="36px" id="scissors" /> : icon = <GiMailedFist fontSize="36px" color="#24282f" />
  //   return icon;
  // };

  return (
    <StyledRenderThrow move={move}>
      <h1>Your Selection:</h1>
      {() => shownThrow(move)}
      {!move && (
        <div className="icon-display">
          <GiMailedFist fontSize="36px" color="#24282f" />
          <p>{move}</p>
        </div>
      )}
      {move === "rock" && (
        <div className="icon-display">
          <GiMailedFist fontSize="36px" id="rock" />
          <p>{move}</p>
        </div>
      )}
      {move === "paper" && (
        <div className="icon-display">
          <GiPalm fontSize="36px" id="paper" />
          <p>{move}</p>
        </div>
      )}
      {move === "scissors" && (
        <div className="icon-display">
          <FaRegHandScissors fontSize="36px" id="scissors" />
          <p>{move}</p>
        </div>
      )}
    </StyledRenderThrow>
  );
};

export default RenderThrow;
