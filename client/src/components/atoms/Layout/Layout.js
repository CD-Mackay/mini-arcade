/* Library Imports */
import React from 'react';


/* Component Imports */


/* Asset Imports */
import StyledLayout from './StyledLayout';

const Layout = (props) => {



  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  )
};

export default Layout;