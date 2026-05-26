import HomePage from "../pages/homePage"
import SearchTeacher from "../pages/searchTeacher"


const homePage = new HomePage()
const searchTeacher = new SearchTeacher()




describe('Casos de teste Estratégia Educacional', () => {
  
  it('Search by Teacher', () => {
    homePage.accesshomePage()

    searchTeacher.searchByTeacher()
    searchTeacher.selectTeacher()
    


})
})



 