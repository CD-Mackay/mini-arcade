/* Library Imports */
import React from 'react';


/* Component Imports */


/* Asset Imports */
import StyledScoreKeeper from './StyledScoreKeeper';

const ScoreKeeper = ({record, name}) => {

  const displayRecord = (object) => {
    let array = []
    for (const property in object) {
      if (name && property === "player_two" ) {
        array.push(<div className="score"><p>{name}:</p><p>{object[property]}</p></div>)
      } else {
        array.push(<div className="score"><p>{property}:</p><p>{object[property]}</p></div>);
      }
    }
    return (array.map((element, index) => {
      return <div key={index}>{element}</div>
    }))
  };

  return (
    <StyledScoreKeeper>
      <h4>Scoreboard</h4>
      {displayRecord(record)}
    </StyledScoreKeeper>
  )
};

export default ScoreKeeper;