import React, { createContext, useState } from "react";

export const RockPaperContext = createContext({
  input: null,
  setInput: function () {},
  winner: null,
  setWinner: function () {},
  handleGame: function () {},
});

export function RockPaperContextProvider(props) {
  const [input, setInput] = useState("");
  const [winner, setWinner] = useState("");
  const [opponentTurn, setOpponentTurn] = useState("");
  const [countDown, setCountDown] = useState(0);
  const [error, setError] = useState("");

  const handleGame = () => {
    const moves = ["rock", "paper", "scissors"];
    const opponentsMove = moves[Math.floor(Math.random() * moves.length)];
    setOpponentTurn(opponentsMove);
    if (
      (input === "rock" && opponentsMove === "paper") ||
      (input === "paper" && opponentsMove === "scissors") ||
      (input === "scissors" && opponentsMove === "rock")
    ) {
      setWinner("computer");
      // setRecord(handleUpdateRecord("player_two", record));
      return false;
    } else if (
      (input === "paper" && opponentsMove === "rock") ||
      (input === "scissors" && opponentsMove === "paper") ||
      (input === "rock" && opponentsMove === "scissors")
    ) {
      setWinner("human");
      // setRecord(handleUpdateRecord("player_one", record));
      return true;
    } else {
      setWinner("draw");
      // setRecord(handleUpdateRecord("draw", record));
      return "draw";
    }
  };

  const handleRenderGamePlay = () => {
    setOpponentTurn("");
    setWinner("");
    console.log("input", input, typeof input);
    if (input === "") {
      setError("No Move Selected");
      return;
    }
    setCountDown(3);
    setTimeout(() => {
      setCountDown(2);
    }, 1000);
    setTimeout(() => {
      setCountDown(1);
    }, 2000);
    setTimeout(() => {
      setCountDown(0);
      handleGame();
    }, 3000);
  };

  return (
    <RockPaperContext.Provider
      value={{
        input,
        setInput,
        handleGame,
        winner,
        setWinner,
        opponentTurn,
        setOpponentTurn,
        countDown,
        setCountDown,
        error,
        setError,
        handleRenderGamePlay
      }}
    >
      {props.children}
    </RockPaperContext.Provider>
  );
}
