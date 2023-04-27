const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'add-the-base-url-of-your-site',
    username: 'add-an-test-username-of-admin',
    password: 'the-password-of-the-above-admin-account'
  },
  e2e: {
    baseUrl: 'add-the-base-url-of-your-site',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },
});
