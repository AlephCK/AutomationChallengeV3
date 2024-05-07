export class Product {
  constructor(actor) {
    this.actor = actor;
  }

  addProductToCart(productName) {
    cy.contains(productName)
      .parents('.inventory_item_description')
      .should('be.visible')
      .within(() => {
        cy.get('#add-to-cart-sauce-labs-backpack')
          .should('be.visible')
          .should('contain.text', 'Add to cart')
          .click();
      });
    return this;
  }

  expectToSeeProductOnCart() {
    cy.get('[data-test="shopping-cart-link"]')
      .should('be.visible')
      .within(() => {
        cy.get('.shopping_cart_badge')
          .should('be.visible')
          .should('exist')
      })
      .click();

    cy.get('.cart_item_label')
      .should('be.visible')
      .within(() => {
        cy.get('#remove-sauce-labs-backpack')
          .should('be.visible')
          .should('contain.text', 'Remove');
      });
    return this;
  }

  removeProductFromCart() {
    cy.get('.cart_item_label')
      .should('be.visible')
      .within(() => {
        cy.get('#remove-sauce-labs-backpack')
          .should('be.visible')
          .should('contain.text', 'Remove')
          .click();
      })

    cy.get('.cart_item_label')
      .should('not.exist');
    return this;
  }
}