
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import About from '../About/About'
import Main from '../Main/Main'
import Team from '../Team/Team'
import Project from '../Project/Project'
import News from '../News/News'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer' 



function Home() {
 
  return (
  
      <div className="home">
      <Navbar/>
      <Header/>
      <About/>
      <Main/>
      <Team/>
      <Project/>
      <News/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default Home
