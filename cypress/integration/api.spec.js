/// <reference types="cypress" />
context("API Testing", () => {


    it("News API 1 Day", () => {
       cy.request({
           method:'GET',
           url:'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo',
       }).should((res)=>{
           cy.log(JSON.stringify(res));
       })
    });
    it("News API 7 Day", () => {
        cy.request({
            method:'GET',
            url:'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo',
        }).should((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.body.status).to.eq('OK')
        })
    });
    it("News API 30 Day", () => {
        cy.request({
            method:'GET',
            url:'https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo',
        }).should((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.body.status).to.eq('OK')
        })
    });

    it("Search API", () => {
        cy.request({
            method:'GET',
            url:'https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&q=thailand&api-key=2x9Od8FiJUKXnu8q6j5d1nLoYs9tX3Zo',
        }).should((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.body.status).to.eq('OK')
        })
    });



});


