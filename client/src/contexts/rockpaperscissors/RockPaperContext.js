import React, { createContext, useState } from "react";

export const RockPaperContext = createContext({});

export function RockPaperContextProvider(props) {
  const [input, setInput] = useState();



  return (
    <RockPaperContext.Provider value={{ input, setInput }}>
      {props.children}
    </RockPaperContext.Provider>
  );
}

