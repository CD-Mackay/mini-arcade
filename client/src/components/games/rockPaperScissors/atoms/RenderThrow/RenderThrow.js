import React, { useState } from 'react';
import { GiMailedFist, GiPalm } from 'react-icons/gi';
import { FaRegHandScissors } from 'react-icons/fa';


import StyledRenderThrow from './StyledRenderThrow';

const RenderThrow = ({move}) => {


  return (
    <StyledRenderThrow move={move}>
      <h1>Your Selection:</h1>
      {move === "rock" && <GiMailedFist id="rock" />}
      {move === "paper"  && <GiPalm id="paper" />}
      {move === "scissors" && <FaRegHandScissors id="scissors" />}
    </StyledRenderThrow>
  )
};

export default RenderThrow;