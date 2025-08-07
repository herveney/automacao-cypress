# 🚀 Automação de Testes E2E – SauceDemo com Cypress

![Demonstração do teste automatizado de compra](assets/Gravação de Tela 2025-08-07 às 15.03.24 (1).gif)

Este projeto realiza testes End-to-End (E2E) automatizados na plataforma [saucedemo.com](https://www.saucedemo.com), utilizando **Cypress** e **JavaScript**.

---

## 📁 Estrutura do Projeto

- `hev_login.cy.js`: Testes de login com diferentes cenários
- `hev_compraProdutoComSucesso.cy.js`: Fluxo completo de compra, desde a ordenação até o checkout

---

## ✅ Funcionalidades Testadas

###  **Login**
- Login com credenciais válidas
- Login com credenciais inválidas
- Login com senha incorreta
- Validação de mensagens de erro

###  **Carrinho e Produtos**
- Ordenação dos produtos do menor para o maior valor
- Validação da ordenação exibida
- Adição de produto ao carrinho
- Verificação da quantidade de produtos no carrinho

###  **Checkout**
- Verificação dos produtos no checkout
- Validação do valor total da compra
- Finalização da compra
- Retorno à homepage

---

##  Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)  
- JavaScript  
- Node.js  

---

##  Como Executar

```bash
# Instalar as dependências
npm install

# Abrir o Cypress Test Runner
npx cypress open```


---

##  Objetivo do Projeto

Este projeto foi desenvolvido como parte do meu aprendizado em automação de testes com Cypress.  
O objetivo é simular cenários reais de login e compra, praticar boas práticas de QA e manter um portfólio público de estudos.

---

## 🤝 Como contribuir

Fique à vontade para abrir **issues**, sugerir melhorias ou enviar um **pull request**.  
Toda contribuição é bem-vinda!



### Autor

Este projeto foi desenvolvido por [Herveney Lima](https://www.linkedin.com/in/herveneylima).

Sinta-se à vontade para conectar!
