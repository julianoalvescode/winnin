describe('Tabs ', () => {

    it('Should render the home', () => {

        cy.visit('/');
    });


    it('The tab hot should click', () => {
        cy.visit('/')

        cy.get('[data-cy=tab-hot]').click()

        cy.get('[data-cy=post]').should('exist')

    })


    it('The tab new should click', () => {
        cy.visit('/')

        cy.get('[data-cy=tab-new]').click()

        cy.get('[data-cy=post]').should('exist')

    })


    it('The tab rising should click', () => {
        cy.visit('/')

        cy.get('[data-cy=tab-rising]').click()

        cy.get('[data-cy=post]').should('exist')

    })


});
