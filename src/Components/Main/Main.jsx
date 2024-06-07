import './Main.css'
import { t } from 'i18next'

function Main() {
 

  return (
    <div className="main">
        <div className="container main__container">
  <h1 className="main__title"> <hr/>{t("main.title")}</h1>
            <h1 className="main__subtitle">{t("main.name")}</h1>
            <ul className="main__list">
                <li className="main__item">
                <i class="fa-solid fa-users"></i>
                <h3 className="main__name">{t("main.text1")}</h3>
                <p className="main__text">{t("main.text2")}</p>
                </li>
                <li className="main__item">
                <i class="fa-regular fa-message"></i>
                <h3 className="main__name">{t("main.text3")}</h3>
                <p className="main__text">{t("main.text4")}</p>
                </li>
                <li className="main__item">
                <i class="fa-solid fa-award"></i>
                <h3 className="main__name">{t("main.text5")}</h3> 
                <p className="main__text">{t("main.text6")}</p>
                </li>
            </ul>

        </div>
      
    </div>
  )
}

export default Main