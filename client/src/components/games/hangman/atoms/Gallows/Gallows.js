import React from 'react';

import StyledGallows from './StyledGallows';

const Gallows = ({failed}) => {
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