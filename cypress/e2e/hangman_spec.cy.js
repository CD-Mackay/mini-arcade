

describe('Hangman', () => {
  it('Opens the Hangman game', () => {
    cy.visit('http://localhost:3001/hangman')
    cy.contains('Play Against Robot')
    cy.contains('Play Against Human').click()

    cy.get('input').type('cypress')

    cy.contains('Start Game').click()
    cy.get('input').type('c{enter}')

  })
  it('Prevents the user from submitting the same letter twice', () => {
    cy.visit('http://localhost:3001/hangman')
    cy.contains('Play Against Human').click()
    cy.get('input').type('cypress')

    cy.contains('Start Game').click()
    cy.get('input').type('c{enter}')

    cy.get('input').type('c')

    cy.contains('Already been guessed')
  })

  it ('logs incorrect guessses by the user', () => {
    cy.visit('http://localhost:3001/hangman')
    cy.contains('Play Against Human').click()
    cy.get('input').type('cypress')

    cy.contains('Start Game').click()
    cy.get('input').type('z{enter}')
    cy.contains('z')
  })
})