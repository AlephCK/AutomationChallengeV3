import { Actor } from '../screenplay/actors/customerActor'
import { Login } from '../screenplay/tasks/loginTask'

describe('Login Tests', () => {
    it('should allow users to login with valid credentials', () => {
      const actor = new Actor('Alice');
      actor.attemptTo(Login)
        .withCredentials('standard_user', 'secret_sauce')
        .expectToSeeDashboard();
    });

    it('shouldn\'t allow users to login with invalid credentials', () => {
      const actor = new Actor('Alex');
      actor.attemptTo(Login)
        .withCredentials('standard_user', 'open_sauce')
        .expectToSeeCredentialsErrorMessage();
    });
})