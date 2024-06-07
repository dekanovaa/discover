import './Newscard.css'
import { t } from 'i18next'

function Newscard({img,text}) {
 

  return (
    <div className="newscard" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${img})`, backgroundSize: 'cover',backgroundPosition: 'center'}}>
        <p className="newscard__name">2023-01-27</p>
        <div className="newscard__box">
            <p className="newscard__text">{text}</p>
            <a className="newscard__link" href="/news">{t("new.link")}</a>
        </div>
    </div>
  )
}

export default Newscard