import './News.css'
import back from './News_img/back.svg'
import new1 from './News_img/new1.webp'
import new2 from './News_img/new2.webp'
import new3 from './News_img/new3.webp'
import new4 from './News_img/new4.webp'
import Newscard from '../Newscard/Newscard'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Autoplay,Thumbs, Navigation } from 'swiper/modules';
import { t } from 'i18next'


function News() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 

  return (
    <div className="news" style={{backgroundImage:`url(${back})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
      <div className="container news__container">
  <h1 className="news__title"><hr/>{t("new.title")}</h1>
        <h1 className="news__subtitle">{t("new.name")}</h1>
        <Swiper
        id="swiper__news"
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          820: {
            slidesPerView: 3,
            spaceBetween: 20,
            
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
            
          },
          620: {
            slidesPerView: 3,
            spaceBetween: 20,
            
          },
          520: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          420: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
         
        }}
        modules={[Autoplay, Thumbs,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Newscard img={new1} text={t("new.text1")}/>
        </SwiperSlide>
        <SwiperSlide>
        <Newscard img={new2} text={t("new.text2")}/>
          </SwiperSlide>
        <SwiperSlide>
        <Newscard img={new3} text={t("new.text3")}/>
          </SwiperSlide>
        <SwiperSlide>
        <Newscard img={new4} text={t("new.text4")}/>
          </SwiperSlide>
      </Swiper>
      <div className="news__box">
        <a className="news__link" href="/news">{t("new.btn")}</a>
      </div>
      </div>
    </div>
  )
}

export default News