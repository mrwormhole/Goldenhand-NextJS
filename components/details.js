
export default function Details() {
    return (
        <section className="section is-medium" id="details">
            <h2 className="header"> Why Should You Choose Us? </h2>

            <div className="columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2" style={{padding: "1.5rem 0.25rem"}}>
                    <h2 className="title"> Test Driven Development </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        Our developers work hard for the development of software products as well as the problems that arise from it. 
                        Goldenhand Software knows that the best way to deal with the problems is to engage in a testing environment during the whole development time.
                    </p>
                </div>
                <div className="column is-4 ">
                    <img className="animated-right-left" src="/test-driven-development.png" alt="Test Driven Development" />
                </div>
            </div>

            <div className="columns reverse-columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2">
                    <img className="animated-right-left" src="/professional-design.png" alt="Test Driven Development" />
                </div>
                <div className="column is-4" style={{padding: "1.5rem 0.25rem"}}>
                    <h2 className="title"> Professional Design </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        Our designers provide the most visually pleasing graphic designs for your business. Goldenhand Software highly value responsiveness of the software products for each media devices
                        to be able to draw attention of all high end users for your business.
                    </p>
                </div>
            </div>

            <div className="columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2" style={{padding: "1.5rem 0.25rem"}}>
                    <h2 className="title"> Secure Hosting </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        As a software company, we rely on extremely safe, fast and convenient infrastructure for all of the software products that are developed by us.
                        Goldenhand Software follows OWASP standards to ensure there are no breaches in security that can harm your business.
                    </p>
                </div>
                <div className="column is-4 ">
                    <img className="animated-right-left" src="/secure-hosting.png" alt="Test Driven Development" />
                </div>
            </div>

            <div className="columns reverse-columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2">
                    <img className="animated-right-left" src="/great-seo.png" alt="Test Driven Development" />
                </div>
                <div className="column is-4" style={{padding: "1.5rem 0.25rem"}}>
                    <span style={{display:"inline-block", width: "16px"}}></span>
                    <h2 className="title"> Great SEO </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        We closely follow trend and algorithm changes on worldwide keywords for the most popular search engines.
                        To be most efficient for your business, Goldenhand Software aims to achieve highest rankings on different search listings.
                    </p>
                </div>
            </div>

            <div className="columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2" style={{padding: "1.5rem 0.25rem"}}>
                    <h2 className="title"> High Quality Content </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        With the best team of developers and designers, Goldenhand Software aims to bring the highest quality content to your business on the internet.
                        We create unique contents for your business' social media accounts as well as web apps. 
                    </p>
                </div>
                <div className="column is-4 ">
                    <img className="animated-right-left" src="/high-quality-content.png" alt="Test Driven Development" />
                </div>
            </div>

            <div className="columns reverse-columns is-vcentered" style={{marginTop: "3rem"}}>
                <div className="column is-4 is-offset-2">
                    <img className="animated-right-left" src="/fast-maintenance.png" alt="Test Driven Development" />
                </div>
                <div className="column is-4" style={{padding: "1.5rem 0.25rem"}}>
                    <h2 className="title"> Fast Maintenance </h2>
                    <p className="subtitle"> 
                        <span style={{display:"inline-block", width: "16px"}}></span>
                        As a software company, we love beating challenges that tackle your business. Solving optimization issues for you is our priority.
                        Whether it is a speed issue or a performance issue, Goldenhand Software resolves it quickly and deliver to you as fast as possible.
                    </p>
                </div>
            </div>
        </section>
    );
}