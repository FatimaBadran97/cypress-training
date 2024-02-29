///<reference types="cypress"/>

describe('Lesson1', () => {
  it('visit Magento site', () => {
    cy.visit('/');
  });
  it('Validate that the user can login', () => {
    cy.visit('/customer/account/login/');
    cy.get('#email').type('CypressUser@gmail.com');
    cy.get('#pass').type('test@123');
    cy.get('#send2').click();

    cy.get('.page-title').should('contain', 'My Account');
  });
  it('Validate that the user can create an account', () => {
    cy.visit('customer/account/create/');
    cy.get('#firstname').type('Auto');
    cy.get('#lastname').type('User');
    cy.get('#email_address').type('AutoUser1@gmail.com');
    cy.get('#password').type('test@123');
    cy.get('#password-confirmation').type('test@123');
    cy.get('[title="Create an Account"]').click();

    cy.get('.logged-in').should('contain', 'Welcome, Auto User!');
  });
});
