// Library Imports
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Component Imports
import Button from "../Button/Button";

// CSS Imports
import StyledDropdown from "./StyledDropdown";

const Dropdown = () => {
  const history = useHistory();

  const [showOptions, setShowOptions] = useState(false);

  const DATA = [
    {
      title: "Tic-Tac-Toe",
      location: "tictactoe",
    },
    {
      title: "Hangman",
      location: "hangman",
    },
    {
      title: "Connect Four",
      location: "connectfour",
    },
    {
      title: "Rock Paper Scissors",
      location: "rockpaperscissors",
    },
    {
      title: "Snake",
      location: "snake",
    },
  ];

  const handleToggleShow = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true);
  };

  const handleSelectDrop = (input) => {
    history.replace(input);
    setShowOptions(false);
  };

  const games = DATA.map((element, index) => {
    return (
      <Button
        message={element.title}
        onClick={() => handleSelectDrop(element.location)}
        key={index}
      />
    );
  });

  /**
   * Dropdown menu for transitioning between games
   * * Styled Dropdown contains logic for selective rendering
   */

  return (
    <StyledDropdown show={showOptions}>
      <Button message="Games" onClick={handleToggleShow} />
      <div className="drop">
        {games}
      </div>
    </StyledDropdown>
  );
};

export default Dropdown;
