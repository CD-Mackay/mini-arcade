/* Library Imports */
import React from 'react';


/* Component Imports */


/* Asset Imports */
import StyledScoreKeeper from './StyledScoreKeeper';

const ScoreKeeper = ({record}) => {

  const displayRecord = (object) => {
    let array = []
    for (const property in object) {
      array.push(<div><p>{property}</p><p>{object[property]}</p></div>);
    }
    return (array.map((element, index) => {
      return <div key={index}>{element}</div>
    }))
  };

  return (
    <StyledScoreKeeper>
      {displayRecord(record)}
    </StyledScoreKeeper>
  )
};

export default ScoreKeeper;