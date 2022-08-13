## Mini-Arcade

## A practice application built by Connor Mackay

  - Built to solidifty my knowledge of ReactJs and practice using Javascript logic in a new medium (video games)

### Usage

  - To use this application, clone the repo to your local terminal.
  - Run `npm install` to install dependencies
  - run `npm start` to open the application

### Organization

  - Each game consists of three major files, with additional component files handling the display of relevent game information. 
  - [Game.js] - Features the layout and list of components used in each game.
  - [Game.module.css] - Contains the styling for each Game/Component
  - [GameContext.js] - Contains all Javascript logic for running the game.

  - Imports are organized as follows:
    - Framework Imports: React and other frameworks
    - Component Imports
    - CSS Imports: Styled components and other CSS Assets

 #### Example of Component

 ```
 /* Library Imports */
import React from 'react';


/* CSS Imports */
import StyledExample from './StyledExample';

const Example = () => {
  return (
    <StyledExample>
      <p>I am Example</p>
    </StyledExample>
  )
};

export default Example;

```


### Features

 - Classic games such as Tic-Tac-Toe, Rock Paper Scissors, Hangman and Connect Four!
 - Play Tic-Tac-Toe against a computer opponent
 - All computer opponents are named after iconic robots from popular culture

 ### Instructions

 - To play games, simply clone the repo to your local terminal 
 - Run 'npm install' to download dependencies and 'npm start' to open the application!
 
### Future Developments

 - Classic Snake!
 - Play ConnectFour against the computer


#### Game List

1: Tic-Tac-Toe (Computer Player available).
2: Connect Four.
3: Hangman (Computer Player Available).
4: Rock Paper Scissors (Computer Player Only).
5: Snake (Currently under Development).