import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faBriefcase, faBug, faSmile } from '@fortawesome/free-solid-svg-icons'

export default function Achievements() {
    return (
        <section className="section" id="achievements">
            <div className="level" >
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faUsers} style={{color: "#E6B749", fontSize: "2rem"}}/>    
                        <p className="title">Happy Clients</p>
                        <p className="subtitle">48</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Projects Done</p>
                        <p className="subtitle">42</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faBug} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Bugs Squashed</p>
                        <p className="subtitle">499</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <FontAwesomeIcon icon={faSmile} style={{color: "#E6B749", fontSize: "2rem"}}/>
                        <p className="title">Satisfaction Rate</p>
                        <p className="subtitle">98%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}