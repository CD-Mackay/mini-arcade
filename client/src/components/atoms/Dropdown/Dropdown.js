/* Library Imports */
import React, { useState } from "react";
import { Router } from "react-router-dom";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";


/* Component Imports */

/* Asset Imports */
import StyledDropdown from "./StyledDropdown";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const history = useHistory();


  const [showOptions, setShowOptions] = useState(false);

  const handleToggleShow = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true);
  }

  const handleSelectDrop = (input) => {
    history.replace(input);
    setShowOptions(false);
  }

  return (
    <StyledDropdown>
      <Button message="Games" onClick={handleToggleShow}/>
      {showOptions && <div className="drop">
        <Button message="snake" onClick={() => handleSelectDrop("/snake")} />
        <Button message="tictactoe" onClick={() => handleSelectDrop("/tictactoe")} />
        <Button message="Connect Four"  onClick={() => handleSelectDrop("connectfour")} />
        <Button message="Hangman" onClick={() => handleSelectDrop("hangman")} />
        <Button message="Rock Paper Scissors" onClick={() => handleSelectDrop("rockpaperscissors")} />

      </div>}
    </StyledDropdown>
  );
};

export default Dropdown;
