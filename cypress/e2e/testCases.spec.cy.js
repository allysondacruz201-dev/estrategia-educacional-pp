import homePage from '../pages/homePage'


const home = new homePage()


describe('Tests Case - Estratégia Educacional', () => {
  
  it('Pesquisa de curso  QA', () => {
    home.accesshomePage()
    cy.get('.layout-header-search > .search-input > [name="q"]').click().type('Curso de QA')
    cy.get("[type='submit'] .icon-find").click()
  })

  it('Search by Teacher', () => {
    home.accesshomePage()
   
})

}
)