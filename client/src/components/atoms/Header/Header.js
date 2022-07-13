/* Library Imports */
import React from "react";

/* Component Imports */
import { Link, useLocation } from "react-router-dom";
/* Asset Imports */
import StyledHeader from "./StyledHeader";
import { BsHouseDoor } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  let location = useLocation();

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
