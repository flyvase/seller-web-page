describe('password authentication tests', () => {
  before(() => {
    cy.task('user:create');
  });

  after(() => {
    cy.task('user:delete');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });
});
