import './News_page.css'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Page_navbar from '../Page_navbar/Page_navbar'
import Newscard from '../Newscard/Newscard'
import img1 from './News_page_img/img1.webp'
import img2 from './News_page_img/img2.webp'
import img3 from './News_page_img/img3.webp'
import img4 from './News_page_img/img4.webp'
import bg from './News_page_img/bg-news .svg'
import { t } from 'i18next'



function News_page(){


    return(
        <div className="news_page">
            <Page_navbar/>
            <div className="news_page__header">
             <div className="container news_page__header__container">
    <h1 className="news_page__title">{t("new.title2")}</h1>
    <p className="news_page__text">{t("new.text9")}</p>
             </div>
            </div>
            <div className="news_page__main" style={{backgroundImage:` url(${bg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
                <div className="container news_page__main__container">
                    <ul className="news_page__list">
                        <li className="news_page__item"> <Newscard img={img1} text={t("new.text1")}/></li>
                        <li className="news_page__item"> <Newscard img={img2} text={t("new.text2")}/></li>
                        <li className="news_page__item"> <Newscard img={img3} text={t("new.text3")}/></li>
                        <li className="news_page__item"> <Newscard img={img4} text={t("new.text4")}/></li>
                    </ul>
                </div>
            </div>
            <Contact/>
            <Footer/>


        </div>
    )
}
export default News_page