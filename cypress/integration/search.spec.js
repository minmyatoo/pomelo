/// <reference types="cypress" />
context("Search Testing", () => {
    it("News Search",()=>{
        cy.visit('http://localhost:3000')
        cy.get("#search").click();
        cy.get('#newssearch')
            .type('Thailand')
            .type('{enter}')
            .wait(5000);
        cy.get('#close').click();
    });
});


