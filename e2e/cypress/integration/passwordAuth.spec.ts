import { userAccount } from '../global/user';

describe('password authentication tests', () => {
  before(() => {
    cy.task('user:create');
  });

  after(() => {
    cy.task('user:delete');
  });

  it('tests auth works with valid input', () => {
    cy.visit('/');

    cy.get('[data-test=email]').should('be.visible').type(userAccount.email);
    cy.get('[data-test=password]')
      .should('be.visible')
      .type(userAccount.password);

    cy.get('[data-test=submit]').should('be.visible').click();

    expect(cy.url(), 'http://localhost:3000/');
  });

  it("tests auth doesn't work with invalid email", () => {
    cy.visit('/');

    const email = 'invalid@gmail.com';

    cy.get('[data-test=email]').should('be.visible').type(email);
    cy.get('[data-test=password]')
      .should('be.visible')
      .type(userAccount.password);

    cy.get('[data-test=submit]').should('be.visible').click();

    expect(
      cy
        .get('[data-test=error]')
        .contains(`${email}で登録されたユーザーが存在しません`)
    );
  });
});
