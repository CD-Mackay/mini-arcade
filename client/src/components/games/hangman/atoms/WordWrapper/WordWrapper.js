// Library Imports
import React from "react";

// Component Imports
import LetterWrapper from "../LetterWrapper/LetterWrapper";

// CSS Imports
import StyledWordWrapper from "./StyledWordWrapper";

const WordWrapper = ({ string }) => {
  const renderString = (string) => {
    if (string !== "") {
      return string.map((element, index) => {
        return (
          <LetterWrapper
            key={index}
            letter={element.value}
            length={string.length}
            selected={element.selected}
          />
        );
      });
    }
  };

  /**
   * Component to display mystery word in Hangmang game
   */

  return (
    <StyledWordWrapper>
      <p>{renderString(string)}</p>
    </StyledWordWrapper>
  );
};

export default WordWrapper;
