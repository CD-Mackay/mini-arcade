

describe('Connect Four', () => {
  it('Opens a game of Connect Four', () => {
    cy.visit('http://localhost:3001/connectfour')
    cy.contains('Connect Four!')
    cy.url().should('include', 'connectfour')
  })

  it('Allows users to select valid squares', () => {
    cy.visit('http://localhost:3001/connectfour')

    cy.get('.57').click()
    cy.get('.47').click()
  })

  it('Warns users when a square is invalid', () => {
    cy.visit('http://localhost:3001/connectfour')
    cy.get('.57').click()
    cy.get('.37').click()

    cy.contains('Square not available')
  })

  it('Correctly displays the winner of the game', () => {
    cy.visit('http://localhost:3001/connectfour')
    cy.get('.57').click()
    cy.get('.56').click()
    cy.get('.47').click()
    cy.get('.37').click()
    cy.get('.46').click()
    cy.get('.36').click()
    cy.get('.35').click()
    cy.get('.26').click()
    cy.get('.55').click()
    cy.get('.54').click()
    cy.get('.45').click()
    cy.get('.35').click()
    cy.get('.45').click()
    cy.get('.27').click()
    cy.get('.53').click()
    cy.get('.17').click()
    cy.get('.44').click()

    cy.contains('Player 1 is victorious!')













  })
})