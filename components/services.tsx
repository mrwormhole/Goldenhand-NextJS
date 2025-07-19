import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCode, faPalette, faServer, faSearch, faPenFancy, faWrench } from '@fortawesome/free-solid-svg-icons'
import ServiceCard from './serviceCard'

export default function Services() {
    return (
        <section className="section is-medium" id="services">
            <h2 className="title"> Our Services </h2>
            <br />
            <div className="columns is-centered">
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"Development"} icon={faCode as IconProp} 
                        serviceDescription={"Effective web apps with flawless build quality, creating the perfect online presence of you and your business for customers"}/>
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"Design"} icon={faPalette as IconProp}
                        serviceDescription={"Beautiful and fully resposive graphic designs to engage your customers and highly customizable across all forms of media"} />
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"Hosting"} icon={faServer as IconProp}
                        serviceDescription={"Blazingly fast and convenient infrastructure for optimum performance and high level of security for most demanding apps"} />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"SEO"} icon={faSearch as IconProp}
                        serviceDescription={"Stand out from the crowd by increasing your web app traffic and improving your business conversion rate with search engine optimization techniques"} />
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"Content Writing"} icon={faPenFancy as IconProp}
                        serviceDescription={"Making content is highly important to become part of your customers' lifestyle and create relationships that work for your business via social media or web app"} />
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <ServiceCard serviceName={"Maintenance"} icon={faWrench as IconProp}
                        serviceDescription={"Speed and performance has always been the crucial part of the web apps, we are here to fix and boost up your web apps to its next level"} />
                </div>
            </div>
        </section>
    );
}
