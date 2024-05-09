import { Actor } from '../screenplay/actors/customerActor';
import { Login } from '../screenplay/tasks/loginTask';

const standard_user = Cypress.env('STANDARD_USER');
const locked_out_user = Cypress.env('LOCKED_OUT_USER');
const password = Cypress.env('PASSWORD');

describe('Login Tests', () => {
	it('should allow users to login with valid credentials', () => {
		const actor = new Actor('Alice');
		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard();
	});

	it('shouldn allow user to logout', () => {
		const actor = new Actor('Alice');
		actor.attemptsTo(Login)
			.withCredentials(standard_user, password)
			.expectToSeeDashboard()
			.attemptsToLogout()
			.expectToSeeLoginForm();
	});

	it('shouldn\'t allow users to login with invalid credentials', () => {
		const actor = new Actor('Alice');
		actor.attemptsTo(Login)
			.withCredentials(standard_user, 'open_sauce')
			.expectToSeeInvalidCredentialsErrorMessage();
	});

	it('shouldn\'t allow locked out users to login', () => {
		const actor = new Actor('Bob');
		actor.attemptsTo(Login)
			.withCredentials(locked_out_user, password)
			.expectToSeeLockedOutErrorMessage();
	});
});