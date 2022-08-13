/* Library Imports */
import React from 'react';


/* Asset Imports */
import StyledLayout from './StyledLayout';

const Layout = (props) => {

  /**
   * Layout Component to control Global layout
   */
  return (
    <StyledLayout>
      {props.children}
    </StyledLayout>
  )
};

export default Layout;