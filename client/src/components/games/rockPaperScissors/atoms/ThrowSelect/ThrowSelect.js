// Library Imports
import React from "react";

// Component Imports
import Button from "../../../../atoms/Button/Button";

// CSS Imports
import StyledThrowSelect from "./StyledThrowSelect";


const ThrowSelect = ({ input, setInput, setError }) => {
  const handleSetInput = (event) => {
    setInput(event.target.innerHTML);
    setError("");
  };

  /**
   * Handles move selection for human player in Rock Paper Scissors
   */

  return (
    <StyledThrowSelect input={input}>
      <div id="rock">
        <Button message="rock" onClick={(event) => handleSetInput(event)} />
      </div>
      <div id="paper">
        <Button message="paper" onClick={(event) => handleSetInput(event)} />
      </div>
      <div id="scissors">
        <Button message="scissors" onClick={(event) => handleSetInput(event)} />
      </div>
    </StyledThrowSelect>
  );
};

export default ThrowSelect;
