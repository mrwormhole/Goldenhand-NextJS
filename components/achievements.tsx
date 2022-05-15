import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBriefcase, faBug, faSmile } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function Achievements() {
    return (
        <section className="section" id="achievements">
            <div className="level" >
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faUsers as IconProp} style={{color: "#E6B749", fontSize: "2rem"}}/>    
                        <p className="title">Happy Clients</p>
                        <p className="subtitle">48</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faBriefcase as IconProp} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Projects Done</p>
                        <p className="subtitle">42</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faBug as IconProp} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Bugs Squashed</p>
                        <p className="subtitle">499</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faSmile as IconProp} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Satisfaction Rate</p>
                        <p className="subtitle">98%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}