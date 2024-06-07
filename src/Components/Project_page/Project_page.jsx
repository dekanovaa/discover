
import './Project_page.css'
import Contact from '../Contact/Contact'
import Project_header from '../Project_page_header/Project_header'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
import Page_navbar from '../Page_navbar/Page_navbar'



function Project_page() {
 

  return (
    <div className="project_page">
       <Page_navbar/>
       <Project_header/>
       <Project/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Project_page
