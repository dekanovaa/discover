import './Project.css'
import project1 from './Project_img/project1.webp'
import project2 from './Project_img/project2.webp'
import project3 from './Project_img/project3.webp'
import project4 from './Project_img/project4.webp'
import project5 from './Project_img/project5.webp'
import project6 from './Project_img/project6.webp'
import { t } from 'i18next'

function Project() {
 

  return (
    <div className="project" id="project">
      <div className="container project__container">
  <h1 className="project__title"><hr/>{t("projects.title")}</h1> 
        <h1 className="project__subtitle">{t("projects.name")}</h1>
        <ul className="project__list">
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project1})`, backgroundSize: 'cover',backgroundPosition: 'center', backgroundImageHoverOpacity:'0.4'}}>
           <div className="project__box">
           <h2 className="project__name">Fonon</h2>
            <p className="project__text">{t("projects.text1")}</p>
           </div>
          </li>
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project2})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
           <div className="project__box">
           <h2 className="project__name">Boulevard</h2>
            <p className="project__text">{t("projects.text2")}</p>
           </div>
          </li>
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project3})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
           <div className="project__box">
           <h2 className="project__name">Magic city</h2>
            <p className="project__text">{t("projects.text3")}</p>
           </div>
          </li>
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project4})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
           <div className="project__box">
           <h2 className="project__name">Invonto</h2>
            <p className="project__text">{t("projects.text4")}</p>
           </div>
          </li>
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project5})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
           <div className="project__box">
           <h2 className="project__name">Gardens Residence</h2>
            <p className="project__text">{t("projects.text5")}</p>
           </div>
          </li>
          <li className="project__item" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project6})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
           <div className="project__box">
           <h2 className="project__name">Presidential Schools</h2>
            <p className="project__text">{t("projects.text6")}</p>
           </div>
          </li>
        </ul>
        <button className="project__btn">
          <a className="project__link" href="#contact">{t("projects.btn")}</a>
        </button>
      </div>
      
    </div>
  )
}

export default Project