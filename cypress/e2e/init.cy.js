describe('Pressbook Init Test', () => {

  it('test landing page', () => {
    cy.visit('/');
  });

  it( 'should take us to Pressbook login page', () => {
    cy.visit('/wp-login.php');
  } );

  it('test database connection by logging in', () => {
    cy.visit('/wp-login.php');
    cy.get( '#user_login' ).type( Cypress.env('username'));
    cy.get( '#user_pass' ).type( Cypress.env('password') );
    cy.get( '#wp-submit' ).click();

    cy.url().should('contain', `/wp-admin/index.php`);
  })

})