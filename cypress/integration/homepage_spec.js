describe('Home page', function() {
  it('Visits my website', function() {
    cy.visit('/')

    cy.contains('Toon bestemming').click()

    cy.contains('Check vluchtprijzen')
  })
})
