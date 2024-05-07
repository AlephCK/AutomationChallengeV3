export class Login {
  constructor(actor) {
    this.actor = actor;
  }

  withCredentials(username, password) {
    cy.visit('/', {
      timeout: 2000,
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
    cy.get('#user-name').type(username);
    cy.get('#password').type(password);
    cy.get('input[type="submit"]').click();
    return this;
  }

  expectToSeeDashboard() {
    cy.url().should('include', '/inventory.html');

    cy.get('.title')
      .should('be.visible')
      .should('have.text', 'Products');

    cy.get('#inventory_container')
      .should('be.visible')
      .should('exist')
      .within(() => {
        cy.get('.inventory_list')
          .should('be.visible')
          .should('exist')
          .contains('Sauce Labs Backpack');
      })
    return this;
  }

  expectToSeeCredentialsErrorMessage() {
    cy.get('[data-test="error"]')
      .should('be.visible')
      .should('contain.text', 'Epic sadface: Username and password do not match any user in this service');

    cy.get('.input_error')
      .should('be.visible')
    return this;
  }
}