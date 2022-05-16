/* Library Imports */
import React from 'react';


/* Component Imports */
/* Asset Imports */
import StyledSidebar from './StyledSidebar';
import { Link, useLocation } from 'react-router-dom';


const Sidebar = () => {

  const location = useLocation();
  console.log(location);

  return (
    <StyledSidebar show={location.pathname}>

    </StyledSidebar>
  )
};

export default Sidebar;