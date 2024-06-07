import './About.css'
import back from './About_img/back.jpg'
import { t } from 'i18next'

function About() {
 

  return (
    <div className="about">
        <div className="container about__container">
  <h1 className="about__title">   <hr/>{t("about.title")}</h1>
                <h1 className="about__title_sub">{t("about.name")}</h1>
                <div className="about__wrap">
                <p className="about__text">{t("about.text")}</p>
            <ul className="about__list">
                <li className="about__item_none">
                
                </li>
                <li className="about__item">
                    <h1 className="about__name">4000+</h1>
                    <p className="about__subtext">{t("about.text1")}</p>
                </li>
                <li className="about__item">
                    <h1 className="about__name">150+</h1>
                    <p className="about__subtext">{t("about.text2")}</p>
                </li>
                <li className="about__item">
                    <h1 className="about__name">16</h1>
                    <p className="about__subtext">{t("about.text3")}</p>
                </li>
                <li className="about__item">
                    <h1 className="about__name">14</h1>
                    <p className="about__subtext">{t("about.text4")}</p>
                </li>
                <li className="about__item">
                    <h1 className="about__name">250+</h1>
                    <p className="about__subtext">{t("about.text5")}</p>
                </li>
                <li className="about__item_link">
                    <a className="about__link" href="/about">{t("about.link")}</a>
                </li>
                <li className="about__item">
                    <h1 className="about__name">9+</h1>
                    <p className="about__subtext">{t("about.text6")}</p>
                </li>
                <li className="about__item_none">
                </li>
            </ul>
            </div>

        </div>
      
    </div>
  )
}

export default About