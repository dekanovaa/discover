import './Header.css'
import header from './Header_img/header.mp4'
import { t } from 'i18next'

function Header() {
 

  return (
    <div className="header">
       <video className="header__video" autoPlay loop muted>
        <source src={header} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <div className="container header__container">
            <h1 className="header__title">DISCOVER INVEST</h1>
  <p className="header__text">{t("header.text")}</p>
            <div className="header__box">
  <button className="header__btn"> <a className="header__link" href="#project">{t("header.btn1")}</a></button>
  <button className="header__btn_right"> <a className="header__link_right" href="#contact">{t("header.btn2")}</a></button>
            </div>
        </div>
    </div>
  )
}

export default Header