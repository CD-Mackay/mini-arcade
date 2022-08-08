

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
})