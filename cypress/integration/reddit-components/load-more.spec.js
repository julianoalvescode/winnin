describe('Load More', () => {

    it('Should click', () => {
        cy.visit('/')

        cy.get('[data-cy=tab-hot]').click()

        cy.get('[data-cy=load-more]').click()

    })

})
