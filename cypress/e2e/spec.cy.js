describe('App Test', () => {
  it('Opens the App and renders the home page', () => {
    cy.visit('http://localhost:3001')
    cy.contains('The Mini Arcade')
  })

  it('Opens a game of Tic-Tac-Toe', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Tic-Tac-Toe').click()
    cy.url().should('include', '/tictactoe')

    cy.contains('Human').click()
    cy.contains('currently Player')

  })
})