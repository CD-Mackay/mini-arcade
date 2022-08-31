

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

  it('Renders the victory message upon success', () => {
    cy.visit('http://localhost:3001/hangman')
    cy.contains('Play Against Human').click()
    cy.get('input').type('cypress')

    cy.contains('Start Game').click()
    cy.get('input').type('s{enter}')
    cy.get('input').type('e{enter}')
    cy.get('input').type('r{enter}')
    cy.get('input').type('c{enter}')
    cy.get('input').type('y{enter}')
    cy.get('input').type('p{enter}')

    cy.contains('Congratulations! You were not hanged')
  })

  it('Renders the loss message', () => {
    cy.visit('http://localhost:3001/hangman')
    cy.contains('Play Against Human').click()
    cy.get('input').type('cypress')

    cy.contains('Start Game').click()

    cy.get('input').type('z{enter}')
    cy.get('input').type('w{enter}')
    cy.get('input').type('q{enter}')
    cy.get('input').type('n{enter}')
    cy.get('input').type('v{enter}')
    cy.get('input').type('o{enter}')

    cy.contains('You have been hanged')


  })
})