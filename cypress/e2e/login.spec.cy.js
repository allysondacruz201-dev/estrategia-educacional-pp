describe('Login Estratégia Educacuinal tests', () => {
  
  it('Login with valid credentials', () => {
    cy.visit('https://perfil.estrategia.com/login')
    cy.get('[name="loginField"]').type('')
  })
})