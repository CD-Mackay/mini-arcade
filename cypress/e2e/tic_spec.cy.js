describe("Tic-Tac-Toe Test", () => {
  it("Opens a game of Tic-Tac-Toe", () => {
    cy.visit("http://localhost:3001/tictactoe");
    cy.contains("Human").click();

    cy.contains("currently Player");
    cy.contains("0").click();
    cy.contains("o");
  });

  it("Resets the board when a user hits Reset Game", () => {
    cy.visit("http://localhost:3001/tictactoe");
    cy.contains("Human").click();

    cy.contains("currently Player");
    cy.contains("0").click();
    cy.contains("o");
    cy.contains("Reset Game").click();

    cy.get(".game-grid");
  });

  it("Correctly shows which player won", () => {
    cy.visit("http://localhost:3001/tictactoe");
    cy.contains("Human").click();
    cy.get(`[data-test-id="game-square-0"]`).click();
    cy.get(`[data-test-id="game-square-4"]`).click();

    cy.get(`[data-test-id="game-square-6"]`).click();
    cy.get(`[data-test-id="game-square-3"]`).click();

    cy.get(`[data-test-id="game-square-5"]`).click();
    cy.get(`[data-test-id="game-square-7"]`).click();

    cy.get(`[data-test-id="game-square-8"]`).click();
    cy.get(`[data-test-id="game-square-1"]`).click();

    cy.contains("Player 1 is victorious");
  });
});
