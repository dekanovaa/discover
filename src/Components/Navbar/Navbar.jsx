import './Navbar.css'
import logo2 from './Navbar_img/logo2.svg'
import logo1 from './Navbar_img/logo1.svg'
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal';

function Navbar() {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem('i18nextLng') || 'en';

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('i18nextLng', selectedLanguage); 
  };
    
    const [logoiTem, setlogoItem] = useState(false);
    const [linkColor, setlinkColor] = useState('transparent');
    const [navColor, setNavColor] = useState('transparent');

    const handleScroll = () => {

        if (window.scrollY > 100 ) {
          setlogoItem(true)
          setNavColor('blue');
          setlinkColor('blue');
    
        } else {
          setlogoItem(false)
          setNavColor('transparent');
          setlinkColor('transparent');
         
        }
      };
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
      
        };
      
      }, []);
 console.log(i18n)

  return (
    
    <div className={`navbar ${navColor === 'blue' ? 'navbar-blue' : 'navbar-transparent'}`}>
        <div className="container navbar__container">
            <nav className="navbar__nav">
                <Link to="/" className="navbar__logo" href="/"><img className={`navbar__img `} src={logoiTem?logo1:logo2} alt="logo"/></Link>
                <ul className="navbar__list">
                <li className="navbar__item">
                   <Link to="/About_page" className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="#">{t("navbar.link1")}</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Project_page" className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="#">{t("navbar.link2")}</Link>
                </li>
                {/* <li className="navbar__item">
                    <a className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="/">{t("navbar.link3")}</a>
                </li> */}
                <li className="navbar__item">
                    <Link to="/News_page" className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="#">{t("navbar.link4")}</Link>
                </li>
                <li className="navbar__item">
                    <Link to="/Contact_page" className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="#">{t("navbar.link5")}</Link>
                </li>
            </ul>
            </nav>
            <div className="navbar__right">
                <div className="navbar__box">
                    <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"><i className={`fa-brands fa-facebook ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
                    <a href="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"><i className={`fa-brands fa-instagram ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
                    <a href="https://t.me/discovery_invest"><i className={`fa-brands fa-telegram ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
                </div>
                <select value={language} onChange={handleChange} className={`navbar__link ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} >
                    <option value="en">EN</option>
                    <option value="uz">UZB</option>
                    <option value="ru">RU</option>
                </select>
                <div className="navbar__wrap">
                    <a className={`navbar__tel ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`} href="tel:+998712888888">+998(71)2888888</a>
                    <a href="tel:+998712888888"><i className="fa-solid fa-phone"></i></a>
                    <Modal/>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar