const text = [
  {
    game: "tictactoe",
    title: "Tic-Tac-Toe",
    introduction: "A simple game played on a 3x3 grid. The objective is to control three squares in a row, either vertically, horizontally or diagonally",
    rules: "Players take turns selecting a square. You may only select squares which have not already been claimed by your opponent. The first player to match 3 consecutive squares wins.",
    strategy: "When selecting a square, consider if the the move has both offensive and defensive value. Advancing your own win conditions is beneficial, as is defending your opponents, but can you do both with one move?",
    pitfalls: "Players can be guilty of focussing on a specific win condition and advancing towards it. Consider each new turn as a fresh situation. With only 9 available moves at the outset, this game changes quickly."
  },
  {
    game: "hangman",
    title: "Hangman",
    introduction: "A word game which is helpful to develop vocabulary and spelling.",
    rules: "One player picks a word, the other player or players must then attempt to guess the word letter by letter. Correct guesses are revealed as part of the word, too many incorrect guesses will result in loss for the guessing players.",
    strategy: "Consider the most common letters in the alphabet, or the way letters typically combine when looking at a word. What are the odds the word has a Q and a W?",
    pitfalls: "It can be difficult to shake an initial guess from ones mind. Don't be afraid to step back, and consider if your biases are pushing you towards a certain word." 
  }
];

export default { text };