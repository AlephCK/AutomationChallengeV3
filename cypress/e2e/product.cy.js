import { Actor } from '../screenplay/actors/customerActor';
import { Login } from '../screenplay/tasks/loginTask';
import { Product } from '../screenplay/tasks/productTask';

const standard_user = Cypress.env('STANDARD_USER');
const password = Cypress.env('PASSWORD');

describe('Product Tests', () => {
	it('should allow users to add product to cart', () => {
		const actor = new Actor('Alice');
		const product = ['Sauce Labs Backpack'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(product)
			.expectToSeeProductOnCart(product);
	});

	it('should allow users to remove a product from cart', () => {
		const actor = new Actor('Alice');
		const product = ['Sauce Labs Backpack'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(product)
			.expectToSeeProductOnCart(product)
			.removeProductFromCart(product);
	});

	it('should allow users to add multiple products to cart', () => {
		const actor = new Actor('Fred');
		const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(products)
			.expectToSeeProductOnCart(products);
	});

	it('should allow users to add remove multiple products to cart', () => {
		const actor = new Actor('Fred');
		const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(products)
			.expectToSeeProductOnCart(products)
			.removeProductFromCart(products);
	});

	it('should allow users to checkout a product', () => {
		const actor = new Actor('Alice');
		const product = ['Sauce Labs Backpack'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(product)
			.expectToSeeProductOnCart(product)
			.proceedToCheckout()
			.fillPersonalInformation('Alice', 'Doe', '11011')
			.expectCheckoutOverview(product)
			.expectCheckoutComplete();
	});

	it('should allow users to checkout multiple products', () => {
		const actor = new Actor('Fred');
		const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket'];

		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();

		actor.attemptsTo(Product)
			.addProductToCart(products)
			.expectToSeeProductOnCart(products)
			.proceedToCheckout()
			.fillPersonalInformation('Alice', 'Doe', '11011')
			.expectCheckoutOverview(products)
			.expectCheckoutComplete();
	});
});