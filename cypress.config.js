const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://magento.softwaretestingboard.com',
    // viewportHeight: 500,
    // viewportWidth: 500,
  },
});
