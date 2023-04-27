const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  env: {
    baseUrl: 'ec2-35-182-169-102.ca-central-1.compute.amazonaws.com/wordpress',
    username: 'system',
    password: 'adxPcWS$L%27a3HbSD'
  },
  e2e: {
    baseUrl: 'http://ec2-35-182-169-102.ca-central-1.compute.amazonaws.com/wordpress',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
