class loginPage {
  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login(user, password) {
    cy.get('[data-test="username"]').type(user);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  }
}

export default new loginPage();
