/* Library Imports */
import React, { useState } from "react";
import Button from "../Button/Button";

/* Component Imports */

/* Asset Imports */
import StyledDropdown from "./StyledDropdown";

const Dropdown = () => {

  const [showOptions, setShowOptions] = useState(false);

  const handleToggleShow = () => {
    showOptions ? setShowOptions(false) : setShowOptions(true);
  }

  return (
    <StyledDropdown>
      <Button message="More games" onClick={handleToggleShow}/>
      {showOptions && <div className="drop">
        <Button message="snake" />
        <Button message="tictactoe" />
        <Button message="Connect Four" />
      </div>}
    </StyledDropdown>
  );
};

export default Dropdown;
