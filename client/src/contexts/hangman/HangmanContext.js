import React, { createContext, useState } from "react";

export const HangmanContext = createContext({
});

export function HangmanContextProvider(props) {
  const strings = [
    "ubiquitous",
    "mendacious",
    "polyglottal",
    "grapefruit",
    "donkey",
    "swamp",
    "indigenous",
    "inexpensive",
  ];

  const [gameString, setGameString] = useState([]);
  const [input, setInput] = useState("");
  const [stringInput, setStringInput] = useState("");
  const [gamePhase, setGamePhase] = useState("setup");
  const [failedGuesses, setFailedGuesses] = useState([]);
  const [alert, setAlert] = useState({
    visible: false,
    color: null,
    message: "",
  });

  const pickString = () => {
    const max = Math.floor(strings.length);
    const index = Math.floor(Math.random() * max);
    const string = strings[index];
    const stringObject = string.split("").map((element) => {
      return { value: element, selected: false };
    });
    setGameString(stringObject);
  };

  const startGame = () => {
    setGamePhase("play");
    pickString();
  };

  const startCustomGame = (string) => {
    const stringObject = string.split("").map((element) => {
      return { value: element, selected: false };
    });
    setGameString(stringObject);
    setGamePhase("play");
  };

  const resetGame = () => {
    setFailedGuesses([]);
    startGame();
  };

  const validateLetter = () => {
    for (const element of gameString) {
      if (element.value == input) {
        return true;
      }
    }
    return false;
  };

  const checkForWin = () => {
    let incrementer = 0;
    for (const element of gameString) {
      if (element.selected == true) {
        incrementer++;
      }
    }
    if (incrementer == gameString.length) {
      setGamePhase("win");
      return true;
    } else {
      return false;
    }
  };

  const checkForLoss = (guesses) => {
    if (guesses.length > 5) {
      setGamePhase("loss");
      return true;
    }
    return false;
  };

  const handleTurn = () => {
    if (validateLetter()) {
      let newGameString = [...gameString];
      for (const letter of newGameString) {
        if (letter.value === input && letter.selected === true) {
          setAlert({
            visible: true,
            color: "#0DFF76",
            message: "Letter has already been selected",
          });
          setTimeout(() => {
            setAlert({
              visible: false,
              color: null,
              message: "",
            });
          }, 2000);
        }
        if (letter.value == input) {
          letter.selected = true;
        }
      }
      setGameString(newGameString);
      setInput("");
      checkForWin();
    } else {
      let guesses = [...failedGuesses];
      guesses.push(input);
      setFailedGuesses(guesses);
      setInput("");
      checkForLoss(guesses);
    }
  };



  return (
    <HangmanContext.Provider
      value={{
        gameString,
        input,
        setInput,
        stringInput,
        setStringInput,
        gamePhase,
        setGamePhase,
        failedGuesses,
        alert, 
        startGame,
        startCustomGame,
        resetGame,
        handleTurn
      }}
    >
      {props.children}
    </HangmanContext.Provider>
  );
}
