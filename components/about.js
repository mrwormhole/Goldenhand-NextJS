import { Link } from "react-scroll";

export default function About() {
    return (
        <section className="section is-medium" id="about">
                <div className="columns">
                    <div className= "column is-4 is-offset-2">
                        <img src="/business.png" />
                    </div>
                    <div className="column is-4">
                        <h2 className="title" style={{textAlign: "center"}}> About Us </h2>
                        <br />
                        <p className="subtitle"> 
                            Goldenhand Software supports the young talented developers and the formal grown-up businesses 
                            in their mobile/web development, design and hosting needs in London, United Kingdom.
                            We as a team use various modern frameworks and tools to be the most efficient and convenient for our clients.
                            <br /><br />Prioritising clients' needs by adapting modern innovations is our way of solving problems.
                            We also provide search engine optimization, content writing and software maintenance for existing older 
                            mobile/web apps of on the various areas such as memory efficieny, network load, unit testing and performance.
                        </p>
                        <br />
                        <div class="buttons is-centered">
                            <Link className="button is-danger is-rounded is-medium" style={{width: "40%"}}
                                activeClass=""
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}> 
                                Contact Us 
                            </Link>
                        </div>
                    </div>
                </div>
        </section>
    );
}