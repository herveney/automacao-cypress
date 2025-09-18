class productsPage {
  shouldBeVisible() {
    cy.get('.title').should("contain", "Products");
  }

  sortBy(label) {
    cy.get('[data-test="product-sort-container"]').select(label);
  }

  shouldBeSortedLowToHigh() {
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should("contain", "Sauce Labs Onesie");
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should("contain", "Sauce Labs Bike Light");
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should("contain", "Sauce Labs Bolt T-Shirt");
  }

  addToCart(items) {
    items.forEach((name) => {
      cy.contains('[data-test="inventory-item-name"]', name).closest('.inventory_item') // card do produto correto 
        .find('button[data-test^="add-to-cart"]').click();
    });
  }


}
export default new productsPage();
