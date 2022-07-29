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



  return (
    <HangmanContext.Provider
      value={{
        strings,
        gameString,
        setGameString,
        input,
        setInput,
        stringInput,
        setStringInput
      }}
    >
      {props.children}
    </HangmanContext.Provider>
  );
}
