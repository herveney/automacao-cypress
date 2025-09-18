class checkoutCompletePage {
  assertSuccess() {
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
  }
  backToProducts() { cy.get('[data-test="back-to-products"]').click() }
}
export default new checkoutCompletePage()
