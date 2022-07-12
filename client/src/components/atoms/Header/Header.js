/* Library Imports */
import React from "react";

/* Component Imports */
import { Link, useLocation } from "react-router-dom";
/* Asset Imports */
import StyledHeader from "./StyledHeader";
import { BsHouseDoor } from "react-icons/bs";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <StyledHeader location={location.pathname}>
      <div className="logo">
        <h1>The Mini Arcade</h1>
      </div>
      {location.pathname !== "/" && (
        <div className="nav">
          <div className="button-wrapper">
            <Link to={`${location.pathname}/tutorial`}>
              <AiOutlineQuestionCircle color="#00FFFF" fontSize="28px" />
            </Link>
          </div>

          <div className="button-wrapper">
            <Link to="/">
              <BsHouseDoor color="#00FFFF" fontSize="24px" />
            </Link>
          </div>
          <div className="button-wrapper">
            <Dropdown />
          </div>

        </div>
      )}
      {/* {location.pathname !== "/" && (
        <div className="button-wrapper">
        <Link to={`${location.pathname}/tutorial`} >
          <AiOutlineQuestionCircle color="#00FFFF" fontSize="28px" />
        </Link>
        </div>
      )}
      <h1>The Mini Arcade</h1>
      {location.pathname !== "/" && (
        <div className="button-wrapper">
          <Link to="/">
            <BsHouseDoor color="#00FFFF" fontSize="24px" />
          </Link>
        </div>
      )} */}
    </StyledHeader>
  );
};

export default Header;
