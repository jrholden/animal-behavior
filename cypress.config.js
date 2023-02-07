const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'http://localhost/animal-behavior',
    username: 'alif',
    password: '1234'
  },
  e2e: {
    baseUrl: 'http://localhost/animal-behavior',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },


  },
});
