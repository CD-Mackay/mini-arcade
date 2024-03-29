// Library Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Component Imports */
import Button from "../Button/Button";

// Asset Imports
import TutorialText from "../../../utilities/TutorialText";

// CSS Imports
import StyledSidebar from "./StyledSidebar";

const Sidebar = () => {
  const location = useLocation();

  const { text } = TutorialText;

  /**
   * Component to display other games available
   */
  return (
    <StyledSidebar show={location.pathname}>
      {location.pathname !== "/" && <h4>Other Games</h4>}
      {location.pathname !== "/" &&
        text
          .filter((element) => !location.pathname.includes(element.game))
          .map((element, index) => {
            return (
              <Link key={index} to={`/${element.game}`}>
                <Button message={element.game} />
              </Link>
            );
          })}
    </StyledSidebar>
  );
};

export default Sidebar;
