describe("Check Navigation", () => {
    beforeEach("open main page", () => {
        cy.visit(Cypress.env("frontQaBaseUrl"))
    })
    it("Check Main Page", () => {
        cy.cyId("sidebar").should("be.visible")
        cy.cyId("DASHBOARD-main_chart").should("be.visible")
    })
    it("Check HP", () => {
        cy.cyId("sidebar-hp-link").click()
        cy.cyId("HP-h1").should("be.visible")
    })
    it("Check User Page", () => {
        cy.cyId("sidebar-user-link").click()
        cy.cyId("user-page-avatar").should("be.visible")
    })
    it("Check Icons Page", () => {
        cy.cyId("sidebar-icons-link").click()
        cy.cyId("ICONS-list_container").should("be.visible")
    })
    it("Check Signin Page", () => {
        cy.cyId("sidebar-testbooks-link").click()
        cy.cyId("sidebar-signin-link").click()
        cy.cyId("SIGNIN-username_input").should("be.visible")
        cy.cyId("SIGNIN-password_input").should("be.visible")
    })
    it("Check Signup Page", () => {
        cy.cyId("sidebar-testbooks-link").click()
        cy.cyId("sidebar-signup-link").click()
        cy.cyId("SIGNUP-username_input").should("be.visible")
        cy.cyId("SIGNUP-email_input").should("be.visible")
        cy.cyId("SIGNUP-password_input").should("be.visible")
        cy.cyId("SIGNUP-register").should("be.visible")
    })
    it("Check Map Page", () => {
        cy.cyId("sidebar-map-link").click()
        cy.cyId("MAP-container").should("be.visible")
    })
    it("Check Notifications Page", () => {
        cy.cyId("sidebar-notifications-link").click()
        cy.cyId("NOTIFICATIONS-styles_block").should("be.visible")
    })
})