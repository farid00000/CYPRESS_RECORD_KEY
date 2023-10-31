const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'th4k99',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
