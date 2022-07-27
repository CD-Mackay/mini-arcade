/* Library Imports */
import React from "react";

/* Component Imports */
import GameListItem from "../GameListItem/GameListItem";

/* Asset Imports */
import StyledGameList from "./StyledGameList";
import { GiTicTacToe, GiDoubleFaceMask, GiTriforce } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

const GameList = () => {
  const GAMES = [
    {
      game: "tictactoe",
      name: "Tic-Tac-Toe",
      description: "Simple, classic, your child can probably beat you.",
      icon: <GiTicTacToe color={"#00FFFF"} fontSize="48px" />,
    },
    {
      game: "hangman",
      name: "Hangman",
      description: "Slightly morbid, good for vocabulistics.",
      icon: <GiDoubleFaceMask color={"#00FFFF"} fontSize="48px" />,
    },
    {
      game: "rockpaperscissors",
      name: "Rock Paper Scissors",
      description: "For those who can't do",
      icon: <GiTriforce color={"#00FFFF"} fontSize="48px" />,
    },
    {
      game: "connectfour",
      name: "Connect Four",
      description: "Because counting to 5 is hard.",
      icon: <BiCategory color={"#00FFFF"} fontSize="48px" />,
    },
    {
      game: "snake",
      name: "Snake",
      description: "it's a snaaake (in development).",
      icon: <MdConstruction color={"#00FFFF"} fontSize="48px" />,
    },
  ];
  return (
    <StyledGameList>
      <div className="game-wrapper">
        {GAMES.map((element, index) => {
          return (
            <GameListItem
              game={element.game}
              name={element.name}
              description={element.description}
              icon={element.icon}
              key={element.index}
            />
          );
        })}
        <GameListItem />
      </div>
    </StyledGameList>
  );
};

export default GameList;
