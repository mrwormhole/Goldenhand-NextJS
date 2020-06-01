import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Pricing() {
    return (
        <section className="section is-medium" id="pricing">
            <h2 className="pricing-title"> Pricing </h2>
            <br />
            <div className="columns is-centered">
                <div className="column is-3-tablet is-3-desktop">
                    <div className="">
                    <h3>Gold</h3>
                    <h4> £299</h4>
                    <h5>+500£ Rush Delivery</h5>
                    </div>
                    <ul>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1-3 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Up to 5 High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Business email</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Popular Design</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> CMS/Admin Panel Support</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                    </ul>
                </div>
                <div className="column is-3-tablet is-3-desktop plan">
                    <div className="">
                        <div className="ribbon ribbon-top-right"><span>Popular</span></div>
                        <h3>Platinium</h3>
                        <h4> £599</h4>
                        <h5>+500£ Rush Delivery</h5>
                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 4-7 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Up to 10 High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 3 Business emails</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> CMS/Admin Panel Support</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> E-Commerce</li>
                            <li className="pricing-not-included"> <FontAwesomeIcon icon={faTimes} style={{color: "#F92F45", fontSize: "1rem"}} /> 1 Month of Free Maintenance</li>
                        </ul>
                    </div>
                </div>
                <div className="column is-3-tablet is-3-desktop">
                    <div className="">
                        <h3>Diamond</h3>
                        <h4> £999</h4>
                        <h5>+500£ Rush Delivery</h5>

                        <ul>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> W3C Certified HTML/CSS</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 8-15 Pages</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Up to 15 High Quality Images</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Contact Form</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Mobile Responsive</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 5 Business emails</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Custom Design</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> CMS/Admin Panel Support</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> Free Google Friendly Sitemap</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> E-Commerce</li>
                            <li> <FontAwesomeIcon icon={faCheck} style={{color: "#1B947F", fontSize: "1rem"}} /> 1 Month of Free Maintenance</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}