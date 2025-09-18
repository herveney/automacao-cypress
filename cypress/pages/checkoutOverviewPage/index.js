class checkoutOverviewPage {
  assertItems(names=[]) {
    names.forEach(name => cy.contains('[data-test="inventory-item-name"]', name).should('be.visible'))
  }
  assertTotal(totalText) {
    cy.get('[data-test="total-label"]').should('have.text', `Total: ${totalText}`)
  }
  finish() { cy.get('[data-test="finish"]').click() }
}
export default new checkoutOverviewPage()
