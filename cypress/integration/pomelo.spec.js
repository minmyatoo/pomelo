/// <reference types="cypress" />
context("Home Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.contains('MOST VIEWED').click();
    });
    it("Should contains App Title", () => {
        cy.get(".Nav_navbar__bpUNv").contains("NYT News");
    });

    it("Should find our news feed and most popular articles by time period.", () => {
        cy.get("h3").contains("Most viewed");
    });

    it('cy.go() - go back or forward in the browser\'s history', () => {

        cy.location('pathname').should('include', 'navigation')

        cy.go('back')
        cy.location('pathname').should('not.include', 'navigation')

        cy.go('forward')
        cy.location('pathname').should('include', 'navigation')

    })

    it('cy.reload() - reload the page', () => {
        cy.reload()
        // reload the page without using the cache
        cy.reload(true)
    })

    //Search


    //News

});