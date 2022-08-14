// Library Imports
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Component Imports */
import Dropdown from "../Dropdown/Dropdown";

// Asset Imports
import { BsHouseDoor } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";

// CSS Imports
import StyledHeader from "./StyledHeader";


const Header = () => {
  let location = useLocation();

  /**
   * Header Component
   */

  return (
    <StyledHeader location={location.pathname}>
      <div className="logo">
        <h1>The Mini Arcade</h1>
      </div>
      {location.pathname !== "/" && (
        <div className="nav">
          <div className="drop-wrapper">
            <Dropdown />
          </div>
          <div className="button-wrapper">
            <Link to="/">
              <BsHouseDoor color="#00FFFF" fontSize="24px" />
            </Link>
          </div>
          <div className="button-wrapper">
            <Link to={`${location.pathname}/tutorial`}>
              <FaQuestion color="#00FFFF" fontSize="22px" />
            </Link>
          </div>
        </div>
      )}
    </StyledHeader>
  );
};

export default Header;
