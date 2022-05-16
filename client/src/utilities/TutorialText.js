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
  },
  {
    game: "rockpaperscissors",
    title: "Rock Paper Scissors",
    introduction: "A game of luck and strategy (allegedly)",
    rules: "Select your move, rock, paper or scissors. Your opponent will do the same and both selections will be revealed simultaneously. Rock beats scissors, scissors beats paper, paper beats rock.",
    strategy: "Oh who knows. Some people say that non-professional players are most likely to choose scissors, making rock the best opener. Look for patterns in your opponents picks I guess.",
    pitfalls: "I don't know man, it's rock paper scissors. I'm genuinely surprised you're reading this."

  },
  {
    game: "connectfour",
    title: "Connect Four",
    introduction: "A classic family game. The objective is to control four consecutive tiles, either vertically, horizontally or diagonally.",
    rules: "Players take turns selecting squares to control. On the first turn, only the first row is available, spaces must be stacked in columns to access higher squares. The first player to connect four wins!",
    strategy: "As with Tic-Tac-Toe, the best move usually combines elements of offense and defense. Look for moves which advance your own win conditions while blocking your opponents.",
    pitfalls: "Some win conditions can seem more available than they actually are. For example, if you already have three squares connected, but the fourth space is much higher than the other stacks, it may be more advantageous to look for other, less completed but more accesible win conditions."

  },
  {
    game: "snake",
    title: "Snake",
    introduction: "An endless challenge that gets more difficult as it goes on",
    rules: "Use the WASD keys to change your snakes direction, chasing apples around and avoiding the walls and yourself.",
    strategy: "Lorem ipsum",
    pitfalls: "Lorem ipsum"

  }
];

export default { text };