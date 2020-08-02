import { Link } from "react-scroll";

export default function Introduction() {
    return (
      <section className="section is-paddingless" id="home">
        <div className="hero is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1">
                <h1 className="title"> We develop <span>the right software</span> to build your business quickly and effectively </h1>
                <br />
                <h2 className="subtitle"> Customizable, Scalable and Convenient Software Solutions </h2>
                <br />
                <div className="buttons has-addons is-left">
                  <Link className="button is-warning is-outlined is-rounded is-medium" style={{width: "45%"}}
                    activeClass=""
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}> 
                      What We Do? 
                  </Link>
                  <Link className="button is-danger is-rounded is-medium" style={{width: "45%"}}
                    activeClass=""
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}> 
                      Get a Quote! 
                  </Link>
                </div>
              </div>
            
              <div className="column is-5">
                  <img className="animated-up-down" src="/web_development.png" alt="web development image"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}