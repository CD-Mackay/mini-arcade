// Library Imports
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Component Imports
import Alert from "../../atoms/Alert/Alert";
import Button from "../../atoms/Button/Button";
import DisplayWrong from "./atoms/DisplayWrong/DisplayWrong";
import TextInput from "./atoms/TextInput/TextInput";
import WordWrapper from "./atoms/WordWrapper/WordWrapper";
import Gallows from "./atoms/Gallows/Gallows";
import CustomInput from "./atoms/CustomInput/CustomInput";
import { HangmanContext } from "../../../contexts/hangman/HangmanContext";

// CSS Imports
import StyledHangman from "./StyledHangman";

const Hangman = () => {
  const {
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
    handleTurn,
  } = useContext(HangmanContext);

  /**
   * Holds Components neccessary for playing Hangman Game
   * * Imports game logic from HangmanContext
   */

  return (
    <StyledHangman phase={gamePhase}>
      {gamePhase == "play" && (
        <div id="game-wrapper">
          <h5>{gamePhase == "win" && "Congratulations!"}</h5>
          <h5>{gamePhase == "loss" && "You have been hanged"}</h5>
          <Gallows failed={failedGuesses} />
          <WordWrapper string={gameString} />
          <TextInput setInput={setInput} input={input} onSubmit={handleTurn} />
          <div id="game-information">
            <Alert
              visible={alert.visible}
              message={alert.message}
              color={alert.color}
            />
            <div id="letter-graveyard">
              <DisplayWrong wrong={failedGuesses} />
            </div>
          </div>
          <div id="finished-menu">
            <Button message="New Game" onClick={resetGame} />
            <Link to="/">
              <Button message="Back to Home" />
            </Link>
          </div>
        </div>
      )}
      {gamePhase == "setup" && (
        <div id="setup-menu">
          <h4>Welcome to HangMan!</h4>
          <div>
            <Button message="Play Against Robot" onClick={() => startGame()} />
            <Button
              message="Play Against Human"
              onClick={() => setGamePhase("input")}
            />
          </div>
        </div>
      )}
      {gamePhase == "input" && (
        <div id="input-wrapper">
          <CustomInput
            string={stringInput}
            onSubmit={() => startCustomGame(stringInput)}
            setString={setStringInput}
          />
        </div>
      )}
      {gamePhase == "win" && <h4>Congratulations! You were not hanged</h4>}
      {gamePhase === "loss" && <h4>You are hung, and not in the good way</h4>}
    </StyledHangman>
  );
};

export default Hangman;
