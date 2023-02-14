
describe('Run login', () => {
  // Before each tests it logins to the admin account
  beforeEach( () => {
    cy.visit( '/wp-login.php' );
		cy.wait( 1000 );
		cy.get( '#user_login' ).type( Cypress.env( "wpUser" ) );
		cy.get( '#user_pass' ).type( Cypress.env( "wpPassword" ) );
		cy.get( '#wp-submit' ).click();
    
  })

  //Waits for page to load
  it( 'Will login to admin page', function() {
		cy.wait( 2000 );
		cy.url().should('eq', 'http://localhost/wordpress/wp-admin/');
	} );

  //Checks if the logo of wp is visible
  it('Logo is visible', function(){
    cy.visit('/wp-admin');
    cy.get('#wp-admin-bar-wp-logo').should('be.visible');
  })

  it('Admin menu is visible', function(){
    cy.visit('/wp-admin');
    cy.get('#adminmenu').should('be.visible');
  })

  //Confirms if admin have their authorization 
  it('Admin menu is visible', function(){
    cy.visit('/wp-admin');
    cy.get('#menu-dashboard').should('be.visible');
    cy.get('#menu-posts').should('be.visible');
    cy.get('#menu-media').should('be.visible');
    cy.get('#menu-pages').should('be.visible');
    cy.get('#menu-comments').should('be.visible');
    cy.get('#menu-appearance').should('be.visible');
    cy.get('#menu-plugins').should('be.visible');
    cy.get('#menu-users').should('be.visible');
    cy.get('#menu-tools').should('be.visible');
    cy.get('#menu-settings').should('be.visible');
    cy.get('#collapse-menu').should('be.visible');
  })
})