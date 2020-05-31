import Project from './project'

export default function Portfolio() {
    return (
        <section className="section is-medium" id="portfolio">
            <h2 className="title"> Our Portfolio </h2>
            <br />
            <div className="columns is-centered">
                <div className="column is-4-tablet is-3-desktop">
                    <Card serviceName={"Development"} icon={faCode} 
                        serviceDescription={"Effective web/mobile apps with flawless build quality, creating the perfect online presence of you and your business for customers"}/>
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <Card serviceName={"Design"} icon={faPalette}
                        serviceDescription={"Beautiful and fully resposive graphic designs to engage your customers and highly customizable across all forms of media"} />
                </div>
                <div className="column is-4-tablet is-3-desktop">
                    <Card serviceName={"Hosting"} icon={faServer}
                        serviceDescription={"Blazingly fast and convenient infrastructure for optimum performance and high level of security for most demanding apps"} />
                </div>
            </div>
        </section>
    );
}