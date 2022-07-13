// Library Imports
import React, { useState } from "react";

// Component Imports
import StyledTextInput from "./StyledTextInput";
import Alert from "../../../../atoms/Alert/Alert";

const TextInput = ({ setInput, input, onSubmit }) => {
  const [previousGuesses, setPreviousGuesses] = useState([]);

  let regex = /[a-zA-Z]/;

  const [error, setError] = useState({
    visible: false,
    color: null,
    message: "",
  });

  const handleAddGuess = (guess) => {
    let copy = [...previousGuesses];
    copy.push(guess);
    setPreviousGuesses(copy);
  };

  const checkGuesses = (guess) => {
    for (let element of previousGuesses) {
      if (element === guess) {
        return false;
      }
    }
    return true;
  };

  const handleSetInput = (value) => {
    const newInput = value.slice(-1);
    if (!checkGuesses(newInput)) {
      setError({
        visible: true,
        color: "#FFAC19",
        message: "Already been guessed!",
      });
      setTimeout(() => {
        setError({
          visible: false,
          color: null,
          message: "",
        });
      }, 2500);
    } else if (regex.test(newInput)) {
      if (error) {
        setError(false);
      }
      setInput("");
      setInput(newInput);
      return true;
    } else {
      setError({
        visible: true,
        color: "#FFAC19",
        message: "Not a letter!",
      });
      setTimeout(() => {
        setError({
          visible: false,
          color: null,
          message: "",
        });
      }, 2500);
      return false;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (handleSetInput(event.target.firstChild.value)) {
      handleAddGuess(event.target.firstChild.value);
      onSubmit();
    } else {
      setError(true);
    }
  };

  return (
    <StyledTextInput error={error}>
      <form onSubmit={() => handleFormSubmit(event)}>
        <input
          placeholder="guess a letter"
          type="text"
          value={input}
          onChange={(event) => handleSetInput(event.target.value)}
        />
        <div>
          <Alert
            visible={error.visible}
            color={error.color}
            message={error.message}
          />
        </div>
      </form>
    </StyledTextInput>
  );
};

export default TextInput;
