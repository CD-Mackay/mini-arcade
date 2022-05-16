/* Library Imports */
import React from "react";

/* Component Imports */
import TutorialText from "../../../utilities/TutorialText";
import Button from '../Button/Button';
/* Asset Imports */
import StyledSidebar from "./StyledSidebar";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const { text } = TutorialText;

  return (
    <StyledSidebar show={location.pathname}>
      {location.pathname !== "/" &&
        text
          .filter((element) => !location.pathname.includes(element.game))
          .map((element, index) => {
            return (
              <Link key={index} to={`/element.game`}>
                <Button message={element.game} />
              </Link>
            );
          })}
    </StyledSidebar>
  );
};

export default Sidebar;
