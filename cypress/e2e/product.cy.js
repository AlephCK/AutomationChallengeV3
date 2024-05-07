import { Actor } from '../screenplay/actors/customerActor'
import { Login } from '../screenplay/tasks/loginTask'
import { Product } from '../screenplay/tasks/productTask'

describe('Product Tests', () => {
    it('should allow users to add product to cart', () => {
      const actor = new Actor('Alice');
      actor.attemptTo(Login)
        .withCredentials('standard_user', 'secret_sauce')
        .expectToSeeDashboard();

      actor.attemptToAdd(Product)
        .addProductToCart('Sauce Labs Backpack')
        .expectToSeeProductOnCart();
    });

    it('should allow users to remove a product from cart', () => {
      const actor = new Actor('Alice');
      actor.attemptTo(Login)
        .withCredentials('standard_user', 'secret_sauce')
        .expectToSeeDashboard();

      actor.attemptToRemove(Product)
        .addProductToCart('Sauce Labs Backpack')
        .expectToSeeProductOnCart()
        .removeProductFromCart();
    });
})