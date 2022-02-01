/* Library Imports */
import React from 'react';


/* Component Imports */


/* Asset Imports */
import StyledScoreKeeper from './StyledScoreKeeper';

const ScoreKeeper = ({record}) => {

  const displayRecord = record.map((element) => {
    return <p>{element}</p>
  })
  return (
    <StyledScoreKeeper>
      <p>I am ScoreKeeper</p>
      {displayRecord}
    </StyledScoreKeeper>
  )
};

export default ScoreKeeper;