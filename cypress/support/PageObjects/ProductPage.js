class ProductPage {
    getHeader(){
        return cy.get('.MuiGrid-grid-md-8 > .MuiTypography-root');
    }
    getPurchaseButton(){
        return cy.get('[data-testid="AddIcon"]');
    }
    getModalText(){
        return cy.get('.MuiDialogContentText-root');
    }
    }
    export default ProductPage   