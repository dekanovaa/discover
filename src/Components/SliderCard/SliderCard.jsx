import './SliderCard.css'
import logo from './SliderCard_img/logo.svg'


function SliderCard({img,name,text}) {
 

  return (
    <div className="slidercard">
        <img className="slidercard__img" src={logo} alt=""/>
        <img className="slidercard__pic" src={img} alt=""/>
  <h5 className="slidercard__name">{name}</h5>
  <p className="slidercard__text">{text}</p>
    </div>
  )
}

export default SliderCard