import loginPage from '../../pages/loginPage';
import productsPage from '../../pages/productsPage';
import header from '../../pages/header';
import cartPage from '../../pages/cartPage';
import checkoutPage from '../../pages/checkoutPage';
import checkoutOverviewPage from '../../pages/checkoutOverviewPage';
import checkoutCompletePage from '../../pages/checkoutCompletePage';

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
  
  beforeEach(() => {
    cy.intercept('POST', 'https://events.backtrace.io/**', { statusCode: 204, body: '' }).as('bt');      /// ignorar chamadas de telemetria
  });

  it('Fluxo da compra de produtos', () => {

    loginPage.visit()
    loginPage.login('standard_user', 'secret_sauce')
    productsPage.shouldBeVisible()

    //ordenação de produtos do menor para o maior valor:
    productsPage.sortBy("Price (low to high)")

    //validação da ordenação dos produtos:
    productsPage.shouldBeSortedLowToHigh()

    //adicionando produtos ao carrinho:
    const items = ['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
    productsPage.addToCart(items)

    //checagem da quantidade de produtos do carrinho:
    header.cartCountShouldBe(3)
    header.openCart()
    cartPage.assertItems(['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'])
    cartPage.checkout()

    //checkout:
    checkoutPage.fillInfo('primeiro nome', 'segundo nome', '05813098')
    checkoutPage.continue()

    //verificando produtos no checkout:
    checkoutOverviewPage.assertItems(['Sauce Labs Onesie', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'])
    checkoutOverviewPage.assertTotal('$36.69')
    checkoutOverviewPage.finish()

    //finalizando compra:
    checkoutCompletePage.assertSuccess()
    checkoutCompletePage.backToProducts()

  }) 

}) 
