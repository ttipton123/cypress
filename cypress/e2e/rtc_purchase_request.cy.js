import ProductPage from '../support/PageObjects/ProductPage';

describe('New Purchase Request From Marketing Site', () => {
    beforeEach(() => {
        cy.visit("https://testing.rubicon-carbon-dev.com/")
        cy.get('button').contains('Only').click()
      })

    it('Requests Purchase on Rubicon Tonnes Page as Verified User', () => {
      const productPage = new ProductPage();

      cy.getMenu().click()
      cy.getRCTOption().click()
      cy.signInToView().click()
      cy.origin('https://rubiconcarbonb2clow.b2clogin.com', () => {
        cy.get('#email').type("ttipton+200@rubiconcarbon.com")
        cy.get('#password').type("Testing123")
        cy.get('#next').click()
    })
    productPage.getHeader().should('contain', 'Industrial Emissions Reductions' )
    productPage.getPurchaseButton().click()
    productPage.getModalText().should(
      "contain.text",
      "contact our sales team")

  })

  it('Requests Purchase on Rubicon Tonnes Page as Unverified User', () => {
    cy.getMenu().click()
    cy.getRCTOption().click()
    cy.signInToView().click()
    cy.origin('https://rubiconcarbonb2clow.b2clogin.com', () => {
      cy.get('#email').type("TestOps@rubiconcarbon.com")
      cy.get('#password').type("Testing123!")
      cy.get('#next').click()
  })
    cy.get('#error-heading').should('exist')

})
})