class HomePage  {
   accesshomePage()  {
            cy.visit('https://www.estrategiaconcursos.com.br/')
   }

   selectorsList() {

      const selector = {
         returnHomePage: '#imgLogo',
         checkHomePage: '.sliderPrincipalDesktop0',
      }

   return selector;
}

returnHomePage() {
   cy.get(this.selectorsList().returnHomePage).click()

}

checkHomePage() { 
   cy.get(this.selectorsList().checkHomePage).should('be.visible')

}

}

export default HomePage