import './Contact.css'
import { useState, useEffect } from 'react';
import back from './Contact_img/bg-footer.png'
import axios from 'axios';
import { message } from 'antd';
import { t } from 'i18next';

function Contact() {
  const [linkColor, setlinkColor] = useState('transparent');


  const handleScroll = () => {

      if (window.scrollY > 100 ) {
        setlinkColor('blue');
  
      } else {
        setlinkColor('transparent');
       
      }
    };
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
    
      };
    
    }, []);

    const sendMessage = (event) =>{
        
      event.preventDefault();
      const token =  "7067329402:AAEGunIJCoHOAJ1uF_oNy80ya2HbKsMJvgA";''
      const id = -1002022260815;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const name = document.getElementById("name").value;
      const tel = document.getElementById("tel").value;
      const textContent = `Name: ${name} \n Phone number:${tel} `
      axios({
        url:url,
        method:'POST',
        data:{
          "chat_id": id,
          "text": textContent,
        }
  
      })
      .then((res) => {
        document.getElementById("form").reset();
       message.success("Yuborildi")
       console.log(textContent)
      }).catch((error) =>{
        message.error("Xatolik")
        console.log(error);
      })
  }
 

  return (
    <div className="contact" id="contact" style={{backgroundImage:`url(${back})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
       <div className="container contact__container">
       <div className="contact__left" >
       <div className="contact__wrap" >
  <h1 className="contact__title"><hr/>{t("contact.title")}</h1>
       <ul className="contact__list">
         <li className="contact__item">
           <div className="contact__row">
           <i class="fa-solid fa-location-pin"></i>
           <h4 className="contact__subtitle">{t("contact.text1")}</h4>
           </div>
           <p className="contact__text">Uzbekistan, Tashkent, National Park of Uzbekistan named after Alisher Navoi</p>
         </li>
         <li className="contact__item">
           <div className="contact__row">
           <i class="fa-solid fa-phone-volume"></i>
           <h4 className="contact__subtitle">{t("contact.text2")}</h4>
           </div>
           <p className="contact__text">+998 71 288 88 88</p>

         </li>
         <li className="contact__item">
           <div className="contact__row">
           <i class="fa-solid fa-clock"></i>
           <h4 className="contact__subtitle">{t("contact.text3")}</h4>
           </div>
           <p className="contact__text">09:00 - 18:00 Mon-Sat</p>
           
         </li>
       </ul>
       <div className="contact__box">
       <a href="https://business.facebook.com/latest/home?asset_id=866538573482797&nav_ref=push"><i class={`fa-brands fa-facebook ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
                    <a href="https://www.instagram.com/discover_invest?igshid=ZDdkNTZiNTM%3D"><i class={`fa-brands fa-instagram ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
                    <a href="https://t.me/discovery_invest"><i class={`fa-brands fa-telegram ${linkColor === 'blue' ? 'link-blue' : 'link-transparent'}`}></i></a>
       </div>
       <form onSubmit = {sendMessage} id="form">
         <div className="contact__number">
         <label>{t("contact.text4")}</label><br/>
         <input id="tel" type="number" placeholder="+998" required/>
         </div>
         <div className="contact__name">
         <label>{t("contact.text5")}</label><br/>
         <input id="name" type="text" placeholder={t("contact.text6")} required/>
         </div>
         <button type="submit" className="contact__btn">{t("contact.btn")}</button>
       </form>
       </div>
       </div>
       <div className="contact__right">
     <iframe src="https://yandex.uz/map-widget/v1/?from=api-maps&ll=69.238730%2C41.302690&mode=routes&origin=jsapi_2_1_79&rtext=~41.302150%2C69.244185&rtt=auto&ruri=~&z=16"></iframe>
     </div>
     </div>
     
      
    </div>
  )
}

export default Contact