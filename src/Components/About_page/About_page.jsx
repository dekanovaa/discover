import './About_page.css'
import Navbar from '../Navbar/Navbar'
import bg from './About_page.img/bg-main.jpg'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { t } from 'i18next'
import mainn from './About_page.img/mainn.jpg'
import main from './About_page.img/main.jpg'
import { Link } from 'react-router-dom'
import wrapper from './About_page.img/wrapper.jpg'
import wrapperbg from './About_page.img/main.bg.svg'
import m2 from './About_page.img/m-2.jpg'
import m3 from './About_page.img/m-3.jpg'
function About_page(){

    return(
        <>
        <Navbar/>
        <div className="about__header" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className="container">
    <h1 className="about__name2">{t("about_page.title")}</h1>
                <p className="about__text7">{t("about_page.text1")}</p>
                <div className="about_page__box">
                <a className="about_page__link" href="https://di.uz/%D0%BF%D1%80%D0%B5%D0%B7%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F.pdf">{t("about_page.btn1")}</a>
                </div>
            </div>
        </div>
        <div className="about_page__main">
            <div className="container about_page__main__container">
                <div className="about_page__left">
                <h1 className="about_page__title"><hr/>{t("about_page.title2")}</h1>
                <img className="about_page__img" src={mainn} alt=""/>
                </div>
                <div className="about_page__right">
                    <img className="about_page__pic" src={main} alt=""/>
                    <p className="about_page__subtext">{t("about_page.text2")}</p>
                    <div className="about_page__box">
                    <Link className="about_page__link" to="/Project_page">{t("about_page.btn2")}</Link>
                    </div>
                </div>
            </div>

        </div>
        <div className="about_page__wrapper" style={{backgroundImage:` url(${wrapperbg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className=" container about_page__wrapper__container">
               <ul className="about_page__sublist">
                   <li className="about_page__subitem">
                       <div className="about_page__line">
                           <p className="about_page__number">1</p>
                           <hr className="about_page__hr"/>
                       </div>
                       <div className="about_page__item__box">
                           <h1 className="about_page__title">{t("about_page.text3")}</h1>
                           <p className="about_page__text2">{t("about_page.text4")}</p>
                       </div>
                       <img className="about_page__pic" src={wrapper} alt=""/>
                   </li>
                   <li className="about_page__subitem">
                       <div className="about_page__line">
                           <p className="about_page__number">2</p>
                           <hr className="about_page__hr"/>
                       </div>
                       <div className="about_page__item__box">
                           <h1 className="about_page__title">{t("about_page.text5")}</h1>
                           <p className="about_page__text2">{t("about_page.text6")}</p>
                       </div>
                       <img className="about_page__pic" src={m2} alt=""/>
                   </li>
                   <li className="about_page__subitem">
                       <div className="about_page__line">
                           <p className="about_page__number">1</p>
                           <hr className="about_page__hr"/>
                       </div>
                       <div className="about_page__item__box">
                           <h1 className="about_page__title">{t("about_page.text7")}</h1>
                           <p className="about_page__text2">{t("about_page.text8")}</p>
                       </div>
                       <img className="about_page__pic" src={m3} alt=""/>
                   </li>

               </ul>

            </div>

        </div>
        <div className="about_page__wrap">
        <div className="container">
        <ul className="about_page__list">
         <li className="about_page__item">
                    <h1 className="about__name">4000+</h1>
                    <p className="about__subtext">{t("about.text1")}</p>
                </li>
                <li className="about_page__item">
                    <h1 className="about__name">150+</h1>
                    <p className="about__subtext">{t("about.text2")}</p>
                </li>
                <li className="about_page__item">
                    <h1 className="about__name">16</h1>
                    <p className="about__subtext">{t("about.text3")}</p>
                </li>
                <li className="about_page__item">
                    <h1 className="about__name">14</h1>
                    <p className="about__subtext">{t("about.text4")}</p>
                </li>
                <li className="about_page__item">
                    <h1 className="about__name">250+</h1>
                    <p className="about__subtext">{t("about.text5")}</p>
                </li>
                <li className="about_page__item">
                    <h1 className="about__name">9+</h1>
                    <p className="about__subtext">{t("about.text6")}</p>
                </li>
         </ul>
        </div>
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}

export default About_page