// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

let generateData = require('./generate/datas')
let generateUrls = require('./generate/urls')

beforeEach(() => {
    let datas = generateData(Cypress.env('env')); cy.wrap(datas, {log: false}).as('datas')
    let urls = generateUrls(Cypress.env('env')); cy.wrap(urls, {log: false}).as('urls')
})