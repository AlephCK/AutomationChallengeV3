const { defineConfig } = require("cypress");
const dotenvPlugin = require('cypress-dotenv');

module.exports = defineConfig({
  projectId: 'j4zfds',
  chromeWebSecurity: false,
  video: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportTitle: 'Automation Tests',
    reportPageTitle: 'Test Automation Results',
    reportFilename: 'automationResults',
    embeddedScreenshots: true,
    charts: true,
    inline: true,
    overwrite: false,
    autoOpen: false,
    timestamp: "longDate",
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {
        require('cypress-mochawesome-reporter/plugin')(on);
        // Configures the Cypress-dotEnv plugin
        config = dotenvPlugin(config)
        return config
    },
  }
});
