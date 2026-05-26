class SearchCourses  {
    
    selectorsList()  {
    
    const selector = {
        searchByCourse: '.layout-header-search > .search-input > [name="q"]',
        selectCourse: ':nth-child(1) > .card-prod-title > a',
        checkCoursePage: '.cur-details-info-title',
        checkRules: '.cur-details-info > .guarantee-box > .guarantee-box-content > a',
        closeRules: '[aria-label="Close"]',
        searchCourse: '.layout-header-search > .search-input > .search-input-icon > .icon-find'
        

    }   

    return selector;

}

selectCourse() {
    cy.get(this.selectorsList().selectCourse, {timeout: 10000}).click({ force: true })
}

checkCoursePage() {
    cy.get(this.selectorsList().checkCoursePage).click().should('be.visible')

}

checkRulesCourse() {
    cy.get(this.selectorsList().checkRules).click().should('be.visible')
}

closeRules() { 
    cy.get(this.selectorsList().closeRules).click()

}

searchByCourse() {
    cy.get(this.selectorsList().searchByCourse).click().type('Curso de QA')
}

clickSearch() {
    cy.get(this.selectorsList().searchCourse).click()
}


}

export default SearchCourses