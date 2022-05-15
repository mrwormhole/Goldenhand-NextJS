import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

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
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1-4 Pages</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Business email</li>
                        <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Popular Design</li>
                        <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> CMS/Admin Panel</li>
                        <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                    </ul>
                </div>
                <div className="column is-3-tablet is-3-desktop plan">
                    <div className="">
                        <div className="ribbon ribbon-top-right"><span>Popular</span></div>
                        <h3>Platinum</h3>
                        <h4> £1000</h4>
                        <h5>For a customized quote, contact us!</h5>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 4-8 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 3 Business Emails</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> CMS/Admin Panel</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> E-Commerc Integration</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> 1 Month of Free Maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="column is-3-tablet is-3-desktop">
                    <div className="">
                        <h3>Diamond</h3>
                        <h4> £2000 </h4>
                        <h5>Ideal for retail businesses</h5>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 8-15 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 5 Business Emails</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Advanced CMS/Admin Panel</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> E-Commerce Integration</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Month of Maintenance Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
