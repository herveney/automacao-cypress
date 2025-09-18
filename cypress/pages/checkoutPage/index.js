class CheckoutPage {
  fillInfo(first,last,zip) {
    cy.get('[data-test="firstName"]').type(first)
    cy.get('[data-test="lastName"]').type(last)
    cy.get('[data-test="postalCode"]').type(zip)
  }
  continue() { cy.get('[data-test="continue"]').click() }
}
export default new CheckoutPage()
