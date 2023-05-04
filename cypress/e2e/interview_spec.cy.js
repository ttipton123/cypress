describe('Test Case From RTC Page', () => {
    beforeEach(() => {
        cy.visit("https://testing.rubicon-carbon-dev.com/products")
        cy.get('button').contains('Only').click()
    })
    it('Runs your test', () => {
        cy.get('#rubicon-carbon-tonnes-heading').contains('Rubicon Carbon Tonnes')
    })

    it('Runs your test', () => {
        cy.contains('Nature-Based Emissions Reductions')
        cy.first().contains('Sign In To View').click()
    })
})
