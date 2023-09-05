const { defineConfig } = require("cypress");
require('dotenv').config();

frantQaIntUrl = process.env.FRONT_QA_INT_URL


module.exports = defineConfig({
  
  config: {
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    frontQaBaseUrl: frantQaIntUrl
  }
});
