/// <reference types= "Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
  it('Fluxo da compra de produtos', () => {

    cy.visit("https://www.saucedemo.com/")
    cy.login_teste('standard_user', 'secret_sauce')
    cy.get('[data-test="title"]').should('contain', 'Products')

    //ordenação de produtos do menor para o maior valor:
    cy.get('[data-test="product-sort-container"]').select('Price (low to high)')
    //validação da ordenação dos produtos:
    cy.get(':nth-child(1) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(2) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > [data-test="inventory-item-description"]').should('contain', 'Sauce Labs Bolt T-Shirt')

    //adicionando produtos ao carrinho:
    cy.contains('Sauce Labs Onesie').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('[data-test="back-to-products"]').click()

    //checagem da quantidade de produtos do carrinho:
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.verificaProdutos()


    //checkout:
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('teste primeiro nome')
    cy.get('[data-test="lastName"]').type('teste ultimo nome')
    cy.get('[data-test="postalCode"]').type('05813045')
    cy.get('[data-test="continue"]').click()

    //verificando produtos no checkout:
    cy.verificaProdutos()

    //verificando valor total do carrinho:
    cy.get('[data-test="total-label"]').should('have.text', 'Total: $36.69')

    //finalizando compra:
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')

    //de volta para homepage:
    cy.get('[data-test="back-to-products"]').click()

  });
});