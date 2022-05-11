import React from "react";

import StyledThrowSelect from "./StyledThrowSelect";

import Button from "../../../../atoms/Button/Button";

const ThrowSelect = ({ input, setInput, setError }) => {
  const handleSetInput = (event) => {
    setInput(event.target.innerHTML);
    setError("");
  };

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
