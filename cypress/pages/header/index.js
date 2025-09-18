class Header {
  cartCountShouldBe(n) {
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
  }
  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click()
  }
}
export default new Header()
