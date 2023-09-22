it("Check Main Page", () => {
    cy.open('front-qa')
    cy.get("[href='/dashboard']").click()
    cy.get('.card-title').should('be.visible')
})