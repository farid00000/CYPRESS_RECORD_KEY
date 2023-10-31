// describe('Assertions demo', () => {


//   it('Implicit Assertions', () => {
//       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// cy.url().should('include', 'orangehrmlive.com')
// cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// cy.url().should('contain', 'orangehrm') 

// });
// });



//Simplest way 
// describe('Assertions demo', () => {


//   it('Implicit Assertions', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.url().should('include', 'orangehrmlive.com')
//             .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//             .should('contain', 'orangehrm')

//   });
// });


//more simpler way
describe('Assertions demo', () => {


  it('Implicit Assertions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain', 'orangehrm')

  });
});



//negative test scenario
describe('Assertions demo', () => {


  it('Implicit Assertions', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', 'orangehrmlive.com')
      .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      .and('contain', 'orangehrm')
      .and('not.contain', 'greenhrm')


    cy.title().should('include', 'Orange')
      .and('eq', 'OrangeHRM')
      .and('contain', 'HRM')

    cy.get('.orangehrm-login-branding > img').should('be.visible')
    cy.get('.orangehrm-login-branding > img').should('exist')

  });
});