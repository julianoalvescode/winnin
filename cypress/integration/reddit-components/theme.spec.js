describe('Theme Switcher', () => {

    it('Should click', () => {
        cy.visit('/')

        cy.get('[data-cy=theme-switcher]').click({force: true})

    })

})
