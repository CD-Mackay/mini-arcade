/* Library Imports */
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Component Imports
import Button from "../Button/Button";

/* CSS Imports */
import StyledDropdown from "./StyledDropdown";

const Dropdown = () => {
  const history = useHistory();

  const [showOptions, setShowOptions] = useState(false);

  const handleToggleShow = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true);
  };

  const handleSelectDrop = (input) => {
    history.replace(input);
    setShowOptions(false);
  };

  /**
   * Dropdown menu for transitioning between games
   */

  return (
    <StyledDropdown show={showOptions}>
      <Button message="Games" onClick={handleToggleShow} />
      <div className="drop">
        <Button message="snake" onClick={() => handleSelectDrop("/snake")} />
          <Button
            message="tictactoe"
            onClick={() => handleSelectDrop("/tictactoe")}
          />
          <Button
            message="Connect Four"
            onClick={() => handleSelectDrop("connectfour")}
          />
          <Button
            message="Hangman"
            onClick={() => handleSelectDrop("hangman")}
          />
          <Button
            message="Rock Paper Scissors"
            onClick={() => handleSelectDrop("rockpaperscissors")}
  />
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
