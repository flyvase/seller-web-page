import { userAccount } from '../global/user';

describe('password authentication tests', () => {
  before(() => {
    cy.task('user:create');
  });

  after(() => {
    cy.task('user:delete');
  });

  it('tests password authentication works with valid input', () => {
    cy.visit('/');

    cy.get('[data-test=email]').should('be.visible').type(userAccount.email);
    cy.get('[data-test=password]')
      .should('be.visible')
      .type(userAccount.password);

    cy.get('[data-test=submit]').should('be.visible').click();

    expect(cy.url(), 'http://localhost:3000/');
  });
});
