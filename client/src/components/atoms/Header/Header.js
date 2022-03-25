/* Library Imports */
import React from "react";

/* Component Imports */
import Button from "../Button/Button";
import { Link, useLocation } from "react-router-dom";
/* Asset Imports */
import StyledHeader from "./StyledHeader";
import { FaQuestionCircle } from "react-icons/fa";

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <StyledHeader location={location.pathname}>
      {location.pathname !== "/" && (
        <div className="button-wrapper">
        <Link to={`${location.pathname}/tutorial`} >
          <FaQuestionCircle color="#00FFFF" fontSize="24px" />
        </Link>
        </div>
      )}
      <h1>The Mini Arcade</h1>
      {location.pathname !== "/" && (
        <div className="button-wrapper">
          <Link to="/">
            <Button message="Return to Home" />
          </Link>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
