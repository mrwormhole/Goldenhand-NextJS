import Form from './form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export type SocialLinks = {
    facebookURL: string
    twitterURL: string
    instagramURL: string
    linkedinURL: string
}

export default function Contact(props: {socialLinks : SocialLinks}) {
    const {socialLinks} = props
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
                            <nav className="level is-mobile  mb-3 mt-3">
                                <div className="level is-mobile" style={{margin: "auto"}}>
                                    <a href={socialLinks.facebookURL} className="level-item">
                                        <span className="icon is-large"><FontAwesomeIcon icon={faFacebook as IconProp} /></span>
                                    </a>
                                    <a href={socialLinks.twitterURL} className="level-item">
                                        <span className="icon is-medium"><FontAwesomeIcon icon={faTwitter as IconProp} /></span>
                                    </a>
                                    <a href={socialLinks.instagramURL} className="level-item">
                                        <span className="icon is-medium"><FontAwesomeIcon icon={faInstagram as IconProp} /></span>
                                    </a>
                                    <a href={socialLinks.linkedinURL} className="level-item">
                                        <span className="icon is-medium"><FontAwesomeIcon icon={faLinkedin as IconProp} /></span>
                                    </a>
                                </div>
                            </nav>
                            <a href="https://cal.com/GOLDENHAND" className="button is-warning is-rounded level-item">Book An Appointment</a>
                        </div>

                        <div className="tile is-child box">
                            <iframe src="https://maps.google.com/maps?q=sunbury&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="100%" aria-hidden="false" tabIndex={0} ></iframe>
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
