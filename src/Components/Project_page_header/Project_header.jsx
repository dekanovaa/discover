
import './Project_header.css';
import { t } from 'i18next';

function Project_header() {
     
    return(
        <div className="project_header" >
            <div className="container project_header__container">
    <h1 className="project_header__title">{t("project_header.name")}</h1>
    <p className="project_header__text">{t("project_header.text")}</p>
            </div>

        </div>
    )
}

export default Project_header