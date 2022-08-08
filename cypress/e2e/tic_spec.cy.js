

describe('Tic-Tac-Toe Test', () => {
  it ('Opens a game of Tic-Tac-Toe', () => {
    cy.visit('http://localhost:3001/tictactoe')
    cy.contains('Human').click()

    cy.contains('currently Player')
    cy.contains('0').click()
    cy.contains('o')
    cy.get('[data-test-id="game-square"]').should('have.length', 9)
  })

  it('Resets the board when a user hits Reset Game', () => {
    cy.visit('http://localhost:3001/tictactoe')
    cy.contains('Human').click()

    cy.contains('currently Player')
    cy.contains('0').click()
    cy.contains('o')
    cy.contains('Reset Game').click()

    cy.get('.game-grid')
  })
})