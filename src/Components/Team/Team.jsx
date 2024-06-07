import './Team.css'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Autoplay,Thumbs, Navigation } from 'swiper/modules';
import team1 from './Team_img/team1.webp'
import team2 from './Team_img/team2.webp'
import team3 from './Team_img/team3.webp'
import team4 from './Team_img/team4.webp'
import team5 from './Team_img/team5.webp'
import SliderCard from '../SliderCard/SliderCard';
import { t } from 'i18next';


function Team() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
 

  return (
    <div className="team">
        <div className="container team__container">
           <div className="team__wrap">
  <h1 className="team__title"><hr/>{t("team.title")}</h1>
            <h1 className="team__subtitle">{t("team.name")}</h1>
           </div>
           <Swiper
           id="swiper__team"
        slidesPerView={4}
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
            <SliderCard img={team1} name={t("team.text1")} text={t("team.text2")}/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard img={team2} name={t("team.text3")} text={t("team.text7")}/>
          </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={team3} name={t("team.text4")} text={t("team.text2")}/>
          </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={team4} name={t("team.text5")} text={t("team.text2")}/>
          </SwiperSlide>
        <SwiperSlide>
          <SliderCard img={team5} name={t("team.text6")} text={t("team.text7")}/>
          </SwiperSlide>
      </Swiper>


        </div>
      
    </div>
  )
}

export default Team