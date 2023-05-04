/// <reference types="cypress" />

Cypress.Commands.add("signInToView", () => {
  return cy.get(':nth-child(2) > .css-2pcphh > .css-qzaaij > .css-139ydao > .MuiButtonBase-root', { timeout: 10000 })
})

Cypress.Commands.add("getMenu", () => {
  return cy.get('[data-testid="MenuIcon"]')})

Cypress.Commands.add("getRCTOption", () => {
  return cy.get('.css-zsukf0 > :nth-child(1) > .MuiButtonBase-root > .MuiTypography-root')})


