class SearchTeacher  {
    
        selectorsList()  {
        
        const selector = {
            searchByTeacher: '.nav-header-links > [href="https://www.estrategiaconcursos.com.br/cursos/professor/"]',
            clickTeacher: ':nth-child(4) > .card-prod-title > a',
            checkTeacherPage: '.page-header-title',

        }

        return selector;

    }   

searchByTeacher() {
    cy.get(this.selectorsList().searchByTeacher).click()
    
}

selectTeacher() {
    cy.get(this.selectorsList().clickTeacher, {timeout: 10000}).click({ force: true })

}

checkTeacherPage() {
    cy.get(this.selectorsList().checkTeacherPage).should('be.visible')

}





}
export default SearchTeacher