import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export default function Pricing() {
    return (
        <section className="section is-medium" id="pricing">
            <h2 className="pricing-title"> Pricing </h2>
            <br />
            <div className="columns is-centered">
                <div className="column is-3-tablet is-3-desktop">
                    <div className="">
                    <h3>Gold</h3>
                    <h4> £500 </h4>
                    <h5>Ideal for startups</h5>
                    </div>
                    <ul>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> 1-4 Pages</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Business email</li>
                        <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Popular Design</li>
                        <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes as IconProp} style={{color: "#F92F45", fontSize: "1rem"}} /> CMS/Admin Panel</li>
                        <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes as IconProp} style={{color: "#F92F45", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                        <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes as IconProp} style={{color: "#F92F45", fontSize: "1rem"}} /> OWASP Securiy Compliance</li>
                    </ul>
                </div>
                <div className="column is-3-tablet is-3-desktop plan">
                    <div className="">
                        <div className="ribbon ribbon-top-right"><span>Popular</span></div>
                        <h3>Platinum</h3>
                        <h4> £1000</h4>
                        <h5>Ideal for small businesses</h5>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> 5-8 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> 3 Business Emails</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> CMS/Admin Panel</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> OWASP Securiy Compliance</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes as IconProp} style={{color: "#F92F45", fontSize: "1rem"}} /> E-Commerc Integration</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes as IconProp} style={{color: "#F92F45", fontSize: "1rem"}} /> 1 Month Free Maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="column is-3-tablet is-3-desktop">
                    <div className="">
                        <h3>Diamond</h3>
                        <h4> Custom </h4>
                        <h5>For a customised quote, book an appointment!</h5>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Unlimited Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Unlimited Business Emails</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Advanced CMS/Admin Panel</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> OWASP Securiy Compliance</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> Ecommerce Integrations</li>
                            <li> <FontAwesomeIcon icon={faCheck as IconProp} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Month Maintenance Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
