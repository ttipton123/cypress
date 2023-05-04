describe('Login to Rubicon', function () {
    before(function () {
        cy.visit('https://rubiconcarbonb2clow.b2clogin.com/rubiconcarbonb2clow.onmicrosoft.com/b2c_1_rubicon_app_test_susi/oauth2/v2.0/authorize?client_id=87b24cf3-4792-4cb1-8ed6-fbfa87362ebd&scope=openid%20profile%20https%3A%2F%2Frubiconcarbonb2clow.onmicrosoft.com%2F87b24cf3-4792-4cb1-8ed6-fbfa87362ebd%2Faccess_as_user%20offline_access&redirect_uri=https%3A%2F%2Ftesting.rubicon-carbon-dev.com%2F&client-request-id=f5a9d264-007f-46cc-9a23-b8e43c6054a7&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.32.2&client_info=1&code_challenge=1eYwJshfrU7aQQnzH2eWhPG5i6Ini5jPA-DApCYqFEk&code_challenge_method=S256&nonce=9270b948-f8cc-4c75-9f52-7a6856459d74&state=eyJpZCI6IjRiNmRlZDc0LTAwOTctNDA4Ny1iY2U0LTk3NWE2MDQ5OTNkOCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D')
        cy.fixture('login').then(function (login) {
            this.login = login
        })
    })

    it('Validate successful Login', function () {
        cy.get('#email').type(this.login.email)
        cy.get('#password').type(this.login.password)
        cy.get('#next').click()
        cy.visit('https://testing.rubicon-carbon-dev.com/')
        cy.origin('https://rubiconcarbonb2clow.b2clogin.com', () => {
            cy.get('button').contains('Only').click()
            cy.get('[data-testid="MenuIcon"]').click()
            cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        })

    })
})