describe('Quiz Maker plugin', () => {

    beforeEach( () => {
        cy.visit("/wp-login.php");
        cy.wait(200);
        cy.get( '#user_login' ).type( Cypress.env('username'));
        cy.get( '#user_pass' ).type( Cypress.env('password') );
        cy.get( '#wp-submit' ).click();
    } );

    it('should be installed', () => {
        cy.visit('/wp-admin/plugins.php');
        cy.get('td.plugin-title').contains('Quiz Maker').should('be.visible');
    });

    it('Quiz Maker side menu activated', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker');
    })

    it('Quiz Maker side menu takes you to question page', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker-questions');
    })

    it('Quiz Maker side menu takes you to quiz categories page', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker-quiz-categories');
    })

    it('Quiz Maker side menu takes you to question categories page', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker-question-categories');
    })

    it('Quiz Maker side menu takes you to all results page', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker-results');
    })

    it('should allow an admin to create a new quiz', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker');
        cy.wait(200);
        cy.get('.page-title-action').click();
        cy.get('#ays-quiz-title').type('Sample quiz');
        cy.get('#ays_submit').click();
        cy.contains('Sample quiz').should('be.visible');
    });

    it('should allow an admin to delete an existing quiz', () => {
        cy.visit('/wp-admin/admin.php?page=quiz-maker');
        cy.wait(200);

        cy.get('[data-message="Sample quiz"]').click({force: true});
        cy.contains('Quiz deleted').should('be.visible');
    });

});