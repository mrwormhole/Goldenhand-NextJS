import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ServiceCard({serviceName, serviceDescription, icon}) {
    return (
        <div className="card " id="service-card">
            <div className="card-content">
                <div className="card-icon-wrapper">
                    <div className="card-icon-shaper">
                        <FontAwesomeIcon icon={icon} style={{color: "#E6B749", fontSize: "3rem"}} />
                    </div>
                </div>
                
                <h4 className="card-title"> {serviceName} </h4>
                <p className="card-subtitle">
                    {serviceDescription}
                </p>
            </div>
        </div>
    );
}