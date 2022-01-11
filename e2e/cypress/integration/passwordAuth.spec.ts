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

  it('tests auth does not work with invalid email', () => {
    cy.visit('/');

    const invalidEmail = 'invalid@gmail.com';

    cy.get('[data-test=email]').should('be.visible').type(invalidEmail);
    cy.get('[data-test=password]')
      .should('be.visible')
      .type(userAccount.password);

    cy.get('[data-test=submit]').should('be.visible').click();

    expect(
      cy
        .get('[data-test=error]')
        .contains(`${invalidEmail}で登録されたユーザーが存在しません`)
    );
  });

  it('tests auth does not work with invalid password', () => {
    cy.visit('/');

    const invalidPassword = 'invalid_password';

    cy.get('[data-test=email]').should('be.visible').type(userAccount.email);
    cy.get('[data-test=password]').should('be.visible').type(invalidPassword);

    cy.get('[data-test=submit]').should('be.visible').click();

    expect(cy.get('[data-test=error]').contains('パスワードが間違っています'));
  });
});
