import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export default function Project({projectName, projectLink, projectImage}) {
    return (
        <div className="card is-paddingless" id="project">
            
            <div className="project-image">
                <figure className="image is-2by1">
                    <img src={projectImage} alt={projectName} />
                </figure>
            </div>
            <div className="project-overlay">
                <a href={projectLink} className="stretched-link" id="cardlink">
                    <div className="project-container">
                        <p className="project-title">{projectName}</p>
                        <FontAwesomeIcon icon={faEye} className="eye-icon" />
                    </div>
                </a>
            </div>
        </div>
    );
}