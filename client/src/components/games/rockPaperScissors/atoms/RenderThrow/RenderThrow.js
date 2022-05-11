import React from "react";
import { GiMailedFist, GiPalm } from "react-icons/gi";
import { FaRegHandScissors } from "react-icons/fa";

import StyledRenderThrow from "./StyledRenderThrow";

const RenderThrow = ({ move }) => {
  return (
    <StyledRenderThrow move={move}>
      <h1>Your Selection:</h1>
      {!move && <GiMailedFist fontSize="36px" color="#24282f" />}
      {move === "rock" && <GiMailedFist fontSize="36px" id="rock" />}
      {move === "paper" && <GiPalm fontSize="36px" id="paper" />}
      {move === "scissors" && (
        <FaRegHandScissors fontSize="36px" id="scissors" />
      )}
    </StyledRenderThrow>
  );
};

export default RenderThrow;
