/// <reference types="cypress" />
context("Home Page", () => {


    it("Should contains news card and clickable news card with navigation", () => {
        cy.visit('http://localhost:3000');
        cy.get("#title").contains("NYT News");
        cy.get("h3").contains("Most viewed");
        cy.contains('MOST VIEWED').click()
            .wait(5000);
        cy.get('#back').click();
    });


    it("Should find our news feed and most popular articles by time period.", () => {
        cy.visit('http://localhost:3000');
        cy.get("h3").contains("Most viewed");
    });
    

});


