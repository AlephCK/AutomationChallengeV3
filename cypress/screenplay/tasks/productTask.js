export class Product {
	constructor(actor) {
		this.actor = actor;
	}

	addProductToCart(products) {
		for (const i in products) {
			cy.contains(products[i])
				.parents('.inventory_item_description')
				.should('be.visible')
				.within(() => {
					cy.get('.btn_inventory')
						.should('be.visible')
						.should('contain.text', 'Add to cart')
						.click();
				});
		}
		return this;
	}

	expectToSeeProductOnCart(products) {
		cy.get('[data-test="shopping-cart-link"]')
			.should('be.visible')
			.within(() => {
				cy.get('.shopping_cart_badge')
					.should('be.visible')
					.should('exist');
			})
			.click();

		cy.url()
			.should('include', '/cart.html');

		cy.get('.cart_item')
			.should('be.visible')
			.and('have.length', products.length)
			.each(($el, index) => {
				cy.wrap($el)
					.should('contain.text', products[index]);
			});
		return this;
	}

	removeProductFromCart(products) {
		cy.get('.cart_item')
			.should('be.visible')
			.and('have.length', products.length)
			.each(($el, index) => {
				cy.wrap($el)
					.should('contain.text', products[index])
					.within(() => {
						cy.get('.btn_secondary')
							.should('contain.text', 'Remove')
							.click();
					});
			});

		cy.get('.cart_item_label')
			.should('not.exist');
		return this;
	}

	proceedToCheckout() {
		cy.get('[data-test="checkout"]')
			.should('be.visible')
			.should('contain.text', 'Checkout')
			.click();
		return this;
	}

	fillPersonalInformation(firstName, lastName, zipCode) {
		cy.url()
			.should('include', '/checkout-step-one.html');

		cy.get('[data-test="title"]')
			.should('contain.text', 'Checkout: Your Information');

		cy.get('[data-test="firstName"]')
			.should('be.visible')
			.type(firstName)
			.should('have.value', firstName);

		cy.get('[data-test="lastName"]')
			.should('be.visible')
			.type(lastName)
			.should('have.value', lastName);

		cy.get('[data-test="postalCode"]')
			.should('be.visible')
			.type(zipCode)
			.should('have.value', zipCode);

		cy.get('[data-test="continue"]')
			.should('be.visible')
			.click();
		return this;
	}

	expectCheckoutOverview(product) {
		cy.url()
			.should('include', '/checkout-step-two.html');

		cy.get('[data-test="title"]')
			.should('contain.text', 'Checkout: Overview');

		cy.get('[data-test="inventory-item"]')
			.should('be.visible')
			.and('have.length', product.length)
			.each(($el, index) => {
				cy.wrap($el)
					.should('contain.text', product[index]);
			});

		cy.get('[data-test="payment-info-value"]')
			.should('be.visible')
			.should('contain.text', 'SauceCard #31337');

		cy.get('[data-test="shipping-info-value"]')
			.should('be.visible')
			.should('contain.text', 'Free Pony Express Delivery!');

		cy.get('[data-test="finish"]')
			.should('be.visible')
			.click();
		return this;
	}

	expectCheckoutComplete() {
		cy.url()
			.should('include', '/checkout-complete.html');

		cy.get('[data-test="title"]')
			.should('contain.text', 'Checkout: Complete!');

		cy.get('[data-test="complete-header"]')
			.should('be.visible')
			.should('contain.text', 'Thank you for your order!');

		cy.get('[data-test="back-to-products"]')
			.should('be.visible')
			.should('contain.text', 'Back Home');
		return this;
	}
}