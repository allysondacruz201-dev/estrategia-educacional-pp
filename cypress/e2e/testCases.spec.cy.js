import homePage from '../pages/homePage'
import SearchTeacher from '../pages/searchTeacher'
import SearchCourses from '../pages/searchCourses'

const home = new homePage()
const searchTeacher = new SearchTeacher()
const searchCourses = new SearchCourses()


describe('Tests Case - Estratégia Educacional', () => {
  

  it('Looking for Teachers - Check Prices - and more', () => {
    
    home.accesshomePage()

    searchTeacher.searchByTeacher()
    searchTeacher.checkTeacherPage()
    searchTeacher.selectTeacher()

    searchCourses.selectCourse()
    searchCourses.checkCoursePage()
    searchCourses.checkRulesCourse()
    searchCourses.closeRules()

    home.returnHomePage()
    home.checkHomePage()
    
    searchCourses.searchByCourse()
    searchCourses.clickSearch()

    home.returnHomePage()
    home.checkHomePage()

 
})


  })

 
   


