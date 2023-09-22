it("Check Main Page", () => {
    cy.open('front-qa')
    cy.get('.card').should('be.visible')
})