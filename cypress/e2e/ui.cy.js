describe('UI tests', () => {
    beforeEach( () => {
        cy.visit("/wp-login.php");
        cy.wait(200);
        cy.get( '#user_login' ).type( Cypress.env('username'));
        cy.get( '#user_pass' ).type( Cypress.env('password') );
        cy.get( '#wp-submit' ).click();
    } );

    it( 'click on avatar and go to profile page', () => {
        cy.get('img.avatar.avatar-26.photo').click()
        cy.url().should('contain', '/wp-admin/profile.php');
    } );

    it('should take us to network dashboard', () => {
        cy.get('#wp-admin-bar-pb-network-admin > [aria-haspopup="true"]').click();
        cy.url().should('contain', '/wp-admin/network/');
    })

    it('should take us to network plugin page', () =>{
        cy.get('#wp-admin-bar-pb-network-admin > [aria-haspopup="true"]').click();
        cy.get('#menu-plugins > .wp-has-submenu > .wp-menu-name').click();

        // Pressbook plugin should be active
        cy.get('tr.active > .plugin-title > strong').contains('Pressbooks');
    })
});