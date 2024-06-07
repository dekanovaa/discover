import './Page_navbar.css'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from './Page_navbar.img/logoo.svg'
import Modal from '../Modal/Modal';

function Page_navbar(){
    const { t, i18n } = useTranslation();
    const language = localStorage.getItem('i18nextLng') || 'en';
  
    const handleChange = (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem('i18nextLng', selectedLanguage); 
    };

    return (
        <>
        <div className="page_navbar">
        <div className="container page_navbar__container">
            <nav className="page_navbar__nav">
                <Link to="/" className="page_navbar__logo" href="/"><img className="page_navbar__img" src={logo}  alt="logo"/></Link>
                <ul className="page_navbar__list">
                <li className="page_navbar__item">
                   <Link to="/About_page" className="page_navbar__link" href="#">{t("navbar.link1")}</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Project_page" className="page_navbar__link" href="#">{t("navbar.link2")}</Link>
                </li>
                {/* <li className="navbar__item">
                    <a className="page_navbar__link" href="/">{t("navbar.link3")}</a>
                </li> */}
                <li className="navbar__item">
                    <Link to="/News_page" className="page_navbar__link" href="#">{t("navbar.link4")}</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Contact_page" className="page_navbar__link" href="#">{t("navbar.link5")}</Link>
                </li>
            </ul>
            </nav>
            <div className="page_navbar__right">
                <div className="page_navbar__box">
                    <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"><i className='fa-brands fa-facebook' id="fa-facebook"></i></a>
                    <a href="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"><i className='fa-brands fa-instagram' id="fa-instagram"></i></a>
                    <a href="https://t.me/discovery_invest"><i className='fa-brands fa-telegram' id="fa-telegram"></i></a>
                </div>
                <select value={language} onChange={handleChange}  id="page_select">
                    <option value="en">EN</option>
                    <option value="uz">UZB</option>
                    <option value="ru">RU</option>
                </select>
                <div className="page_navbar__wrap">
                    <a className="page_navbar__tel" href="tel:+998712888888">+998(71)2888888</a>
                    <a href="tel:+998712888888"><i className="fa-solid fa-phone"></i></a>
                </div>
            </div>
            <Modal/>
        </div>
    </div>
        </>
    )
}
export default Page_navbar