describe("Pages Sanity Check", () => {
    it("Check Main Page", () => {
        cy.visit(Cypress.env("frontQaBaseUrl"))
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/')})
    })
    it("Check HP", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/pages/hp`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/pages/hp/')})
    })
    it("Check User Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/pages/user`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/pages/user/')})
    })
    it("Check Icons Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/pages/icons`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/pages/icons')})
    })
    it("Check Signin Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/accounts/auth-signin`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/accounts/auth-signin/')})
    })
    it("Check Signup Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/accounts/auth-signup`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/accounts/auth-signup/')})
    })
    it("Check Map Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/pages/map`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/pages/map')})
    })
    it("Check Notifications Page", () => {
        cy.visit(`${Cypress.env("frontQaBaseUrl")}/pages/notifications`)
        cy.location().should( (loc) => {expect(loc.pathname).to.eq('/pages/notifications/')})
    })
})