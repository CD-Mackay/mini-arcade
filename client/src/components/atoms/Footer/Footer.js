/* Library Imports */
import React from 'react';
import { Link } from 'react-router-dom';


/* Component Imports */
import { AiFillGithub } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';


/* CSS Imports */
import StyledFooter from './StyledFooter';

const Footer = () => {

  /**
   * Footer Component
   */
  return (
    <StyledFooter>
      <p>A Practice Application, built by Connor Mackay</p>
      <ul>
        <Link to={{ pathname: "https://github.com/CD-Mackay"}} target="_blank">
        <li>
          <AiFillGithub color="#00FFFF" fontSize="32px" />
        </li>
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/in/connor-mackay-800992bb/"}} target="_blank">
        <li>
          <IoLogoLinkedin color="#00FFFF" fontSize="32px" />
        </li>
        </Link>
      </ul>
    </StyledFooter>
  )
};

export default Footer;