/// <reference types="cypress" />
context("Responsive viewport", () => {

    beforeEach('Visit',()=>{
        cy.visit('http://localhost:3000');
    })
    it("Should able to responsive with computers", () => {

        cy.viewport(1280, 720);
        cy.get("#title").contains("NYT News");
        cy.get("h3").contains("Most viewed");
        cy.contains('MOST VIEWED').click()
            .wait(5000);
        cy.get('#back').click();

    });
    it("Should able to work well with mobile devices", () => {
        cy.visit('http://localhost:3000');
        cy.viewport('iphone-6');
        cy.get("#title").contains("NYT News");
        cy.get("h3").contains("Most viewed");
        cy.contains('MOST VIEWED').click()
            .wait(5000);
        cy.get('#back').click();
    });
});


