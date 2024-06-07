import './Contact_page.css'
import Navbar from '../Navbar/Navbar'
import bg from './Contact_page.img/bg-main.jpg'
import { t } from 'i18next'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { message } from 'antd'



function Contact_page(){
    const sendMessage = (event) =>{
        
        event.preventDefault();
        const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
        const id = -1002022260815;
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const name = document.getElementById("contact__name").value;
        const tel = document.getElementById("contact__number").value;
        const select = document.getElementById("contact__select").value;
        const text = document.getElementById("contact__text").value;
        const textContent = `Name: ${name} \n Phone number:${tel} \n Select_department: ${select} \n text: ${text} `
        axios({
          url:url,
          method:'POST',
          data:{
            "chat_id": id,
            "text": textContent,
          }
        })
        .then((res) => {
          document.getElementById("contact__form").reset();
         message.success("Yuborildi")
         console.log(textContent)
        }).catch((error) =>{
          message.error("Xatolik")
          console.log(error);
        })
    }
    return (
        <>
        <Navbar/>
        <div className="contact_page__header" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
            <div className="container contact_page__header__container">
            <div className="contact_page__box"> <h1 className="contact_page__header__title">{t("contact.title2")}</h1>
            <p className="contact_page__header__text">{t("contact.text7")}</p>
            <a href="#contact_page__main"><i class="fa-solid fa-down-long"></i></a>
            </div>
            <form id="contact__form" onSubmit={sendMessage}>
    <label>{t("form.text1")}</label><br/>
                <input type="text" placeholder={t("form.text2")} id="contact__name" required/><br/>
                <label>{t("form.text3")}</label><br/>
                <input type="text" placeholder="+998" id="contact__number" required/><br/>
                <label>{t("form.text4")}</label><br/>
                <select id="contact__select" required>
                    <option id="contact__option" value="sdc">{t("form.text5")}</option>
                    <option id="contact__option" value="jhsvc">{t("form.text6")}</option>
                    <option id="contact__option" value="xkcj">{t("form.text7")}</option>
                    <option id="contact__option" value="cdcdc">{t("form.text8")}</option>
                    <option id="contact__option" value="cdwas">{t("form.text9")}</option>
                </select><br/>
                <label>{t("form.text10")}</label>
                <input type="textarea" id="contact__text" placeholder={t("form.text11")} required/><br/>
                <button type="submit" class="contact__btn">{t("contact.btn")}</button>
            </form>
            </div>
        </div>
        <div className="contact_page__main" id="contact_page__main">
            <div className="container">
    <h1 className="contact_page__name"><hr/>{t("contact.page_name")}</h1>
    <p className="contact_page__subtext">{t("contact.page_text")}</p>
                <ul className="contact_page__list">
         <li className="contact_page__item">
           <div className="contact__row">
           <i class="fa-solid fa-location-pin"></i>
           <h4 className="contact__subtitle">{t("contact.text1")}</h4>
           </div>
           <p className="contact__text">Uzbekistan, Tashkent, National Park of Uzbekistan named after Alisher Navoi</p>
         </li>
         <li className="contact_page__item">
           <div className="contact__row">
           <i class="fa-solid fa-phone-volume"></i>
           <h4 className="contact__subtitle">{t("contact.text2")}</h4>
           </div>
           <p className="contact__text">+998 71 288 88 88</p>

         </li>
         <li className="contact_page__item">
           <div className="contact__row">
           <i class="fa-solid fa-clock"></i>
           <h4 className="contact__subtitle">{t("contact.text3")}</h4>
           </div>
           <p className="contact__text">09:00 - 18:00 Mon-Sat</p>
           
         </li>
       </ul>
            </div>
        </div>
        <iframe id="contact__map" src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.238730%2C41.302690&mode=routes&origin=jsapi_2_1_79&rtext=~41.302150%2C69.244185&rtt=auto&ruri=~&z=16"></iframe>
        <Footer/>
        </>
    )
}

export default Contact_page