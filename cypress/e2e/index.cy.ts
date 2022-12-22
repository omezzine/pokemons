describe('/', () => {
  it('contains title message', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Pokemons');
  });
});
