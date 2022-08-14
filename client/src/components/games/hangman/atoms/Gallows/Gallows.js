// Library Imports
import React from 'react';

// CSS Imports
import StyledGallows from './StyledGallows';

const Gallows = ({failed}) => {

  /**
   * Simple Component to display "man" in Hangman
   */
  return (
    <StyledGallows display={failed.length}>
      <div id="head" />
      <div id="arms">
        <div id="left-arm" />
        <div id="right-arm" />
      </div>
      <div id="body" />
      <div id="legs">
        <div id="left-leg" />
        <div id="right-leg" />
      </div>
    </StyledGallows>
  )
};

export default Gallows;