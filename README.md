# Senior Automation Challenge Project
This project contains the Senior Automation Challenge project from Winston Cruz that consists of:
- Automate 10 test cases for the Sauce Demo page using Screenplay Design Pattern.

## UI Testing
The framework containst the following 10 test cases for the webapp https://www.saucedemo.com/:

**Login**

1. Login with valid credentials
2. Login with invalid credentials
3. Logout
4. Login with a locked out user

**Products**

5. Add product to cart
6. Remove product from cart
7. Add multiple products to cart
8. Remove multiple products from cart
9. Checkout a product
10. Checkout multiple product

The test case were documented on the Test Management Tool called [TestCollab](https://testcollab.io) before proceeding the automation work. Feel free to request me the access to the test cases if needed.

## Tech Stack
- [Javascript](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [nodeJS](https://nodejs.org/en/about/)
- [Cypress](https://www.cypress.io)
   - [Cypress Cloud](https://www.cypress.io/cloud)
- [cypress-plugin-api](https://www.npmjs.com/package/cypress-plugin-api)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress)
- [cypress-mochawesome-reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)
- [GitHub Actions](https://github.com/features/actions)
- [dotenv](https://github.com/motdotla/dotenv#readme)
- [cypress-doten](https://github.com/morficus/cypress-dotenv)


## General Requirements

### Clone the Repository
Using SSH
```bash
git clone git@github.com:AlephCK/AutomationChallengeV3.git
```

### Dev Install

Install all dependencies

```bash
npm install
```

### Using credentials to run Cypress Tests
We use the `.env` to add the credentials used for the e2e specs tests:

```
CYPRESS_STANDARD_USER="standard_user"
CYPRESS_LOCKED_OUT_USER="locked_out_user"
CYPRESS_PASSWORD="secret_sauce"
```

### How To Use Cypress
The following commands can be used in order to run the test cases:

Open Cypress UI
```bash
npm run test-gui
```

Run the e2e tests (on Cypress Run mode)
```bash
npm run test
```

### Before doing a commit

Run ESLint to fix any typos
```bash
npm run lint-fix
```

Run ESLint to look out for any typos
```bash
npm run lint
```