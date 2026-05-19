import homePage from '../pages/homePage'


const home = new homePage()


describe('Tests Case - Estratégia Educacional', () => {
  

  it('Looking for Teachers - Check Prices - and more', () => {
    home.accesshomePage()
    cy.get('[href="https://www.estrategiaconcursos.com.br/cursos/professor/"]').click()
    cy.get('.page-header-inner').should('be.visible')
    cy.get(':nth-child(4) > .card-prod-title > a', {timeout: 10000}).click({ force: true })
    cy.get(':nth-child(1) > .card-prod-details').click()
    cy.get('.page-header-inner').should('be.visible', 'contain', 'ANS (Especialista em Regulação de Saúde Suplementar) Português')
    cy.get('.cur-details-info > .guarantee-box > .guarantee-box-content > a').click()
    cy.get("[aria-label='Close']").click()
    cy.get('.featherlight').click()
    cy.get("[alt='Logo - Estratégia Concursos']").click()
    cy.get('.layout-header-search > .search-input > [name="q"]').click().type('Curso de QA')
    cy.get("[type='submit'] .icon-find").click()
    cy.get("[alt='Logo - Estratégia Concursos']").click()

 
})


  })

 
   


