import searchTeacher from '../pages/searchTeacher'

const search = new searchTeacher()


describe('Casos de teste Estratégia Educacional', () => {
  
  it('Search by Teacher', () => {
    search.searchByTeacher()
    cy.get("[href='https://www.estrategiaconcursos.com.br/cursosPorProfessor/adriana-figueiredo-3993/']").click()

})
})


 