import Project from './project'

export default function Portfolio() {
    return (
        <section className="section is-medium" id="portfolio">
            <h2 className="title"> Our Portfolio </h2>
            <br />
            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop">
                    <Project 
                        projectName="Vertigo File Hosting"
                        projectImage="/vertigo-project.jpg" 
                        projectLink="http://vertigo-files.herokuapp.com/" />
                </div>
                <div className="column is-6-tablet is-6-desktop">
                    <Project 
                        projectName="Mindmap Education Consultancy"
                        projectImage="/mindmap-project.jpg" 
                        projectLink="http://mindmapedu.co.uk/" />
                </div>
            </div>
            <div className="columns is-centered">
                <div className="column is-6-tablet is-6-desktop">
                    <Project 
                        projectName="Medikey Health Consultancy"
                        projectImage="/medikey-project.jpg" 
                        projectLink="https://www.medikeyhealth.co.uk/" />
                </div>
                <div className="column is-6-tablet is-6-desktop">
                        <Project 
                            projectName="Zeytun ABC Accounting"
                            projectImage="/zeytun-project.jpg" 
                            projectLink="https://www.zeytunabc.com/" />
                </div>
            </div>

        </section>
    );
}