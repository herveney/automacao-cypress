class CartPage {
  assertItems(names=[]) {
    names.forEach(name => {
      cy.contains('[data-test="inventory-item-name"]', name).should('be.visible')
    })
  }
  checkout() {
    cy.get('[data-test="checkout"]').click()
  }
}
export default new CartPage()
