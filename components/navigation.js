import { Link } from "react-scroll";

function toggleBurger() {
  const navbarBurger = document.getElementsByClassName("navbar-burger")[0];
  const navbarMenu = document.getElementsByClassName("navbar-menu")[0];

  navbarBurger.classList.toggle("is-active");
  navbarMenu.classList.toggle("is-active");
}

export default function Navigation() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="/logo.svg" />
            <p className="company-title">GOLDENHAND SOFTWARE</p>
          </a>

          <a role="button" 
            className="navbar-burger burger" 
            aria-label="menu" 
            aria-expanded="false" 
            data-target="navbarBasicExample" 
            onClick={() => toggleBurger()}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu"> 
          <div className="navbar-end">
            <Link className="navbar-item"
              activeClass="is-active"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                Home 
            </Link>
            <Link className="navbar-item"
              activeClass="is-active"
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                About 
            </Link>
            <Link className="navbar-item"
              activeClass="is-active"
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                Services
            </Link>
            <Link className="navbar-item"
              activeClass="is-active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                Portfolio 
            </Link>
            <Link className="navbar-item"
              activeClass="is-active"
              to="pricing"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                Pricing 
            </Link>
            <Link className="navbar-item"
              activeClass="is-active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500} onClick={() => toggleBurger()}> 
                Contact 
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}