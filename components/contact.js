import Form from '../components/form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <section className="section" id="contact">
            <h2 className="title"> Contact Us </h2>
            <div className="container">
                <div className="tile is-ancestor">
                    <div className="tile is-4 is-vertical is-parent">
                        <div className="tile is-child box">
                            <p className="small-title">Get In Touch</p>
                            <h5>+44 745 975 2164</h5>
                            <h5>info@goldenhandsoftware.co.uk</h5>
                            <br />
                            <br />
                            <p className="small-title">Social Media</p>
                            <nav className="level is-mobile">
                                <div className="level is-mobile" style={{margin: "auto"}}>
                                    <a href="https://www.facebook.com/goldenhandsoftware" className="level-item">
                                        <span className="icon is-large"><FontAwesomeIcon icon={faFacebook} /></span>
                                    </a>
                                    <a href="https://twitter.com/goldenhand_dev" className="level-item">
                                        <span className="icon is-medium"><FontAwesomeIcon icon={faTwitter} /></span>
                                    </a>
                                    <a href="https://www.instagram.com/goldenhandsoftware" className="level-item">
                                        <span className="icon is-medium"><FontAwesomeIcon icon={faInstagram} /></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div className="tile is-child box">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.809384245761!2d-0.09449563422428249!3d51.663326279661064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761f4a8e25fe65%3A0xe86780eb04aa557d!2sGordon%20Hill%2C%20Enfield%20EN2%200QT!5e0!3m2!1sen!2suk!4v1596374449938!5m2!1sen!2suk" width="100%" height="100%" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <div className="tile is-child box">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}