describe('CSSLocators', () => {
  it("CSSLocators", () => {

    cy.visit("http://www.automationpractice.pl");
    //cy.title();
    cy.get(".search_query").type("T-Shirts"); //here we used ID & tags are optional//
    cy.get("[name='submit_search']").click();
    cy.get('.lighter').contains('T-Shirt'); // Assertion//
  });

});

describe('CSSLocators', () => {
  it("CSSLocators", () => {

    cy.visit("http://www.automationpractice.pl");
    //cy.title();
    //cy.get("#search_query_top").type("dresses"); //here we used ID & tags are optional//
    cy.get(".search_query").type("Dresses");
    cy.get("[name='submit_search']").click();
    cy.get(".lighter").contains('Dresses'); // Assertion//
  });

});



//Using Attribute now //

describe('CSSLocators', () => {
  it("CSSLocators", () => {

    cy.visit("http://www.automationpractice.pl");
    //cy.title();
    cy.get("[name='search_query']").type("T-Shirts"); //here we used ID & tags are optional//
    cy.get("[name='submit_search']").click();
    cy.get('.lighter').contains('T-Shirt'); // Assertion//
 
 
 
    cy.get('.orangehrm-login-branding > img').should('be.visible')
    cy.get('.orangehrm-login-branding > img').should('exist')
 
  });

});