import React from "react";
import "../styles/components/navbar.scss";

class Navbar extends React.Component {
  scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    return (
      <nav className="navbar-container" onMouseOver={this.mouseOver}>
        <div className="elements">
          <div className="me">
            <div className="name">
              {" "}
              <span className="l">L</span>
              <span className="a">A</span>
            </div>

            <div className="poste">
              <span className="w">W</span>
              <span className="d">D</span>
            </div>
          </div>
          <div className="square"></div>
          <ul>
            <div className="line-mobile">
              <div className="line-menu"></div>
              <div className="line-menu"></div>
              <div className="line-menu"></div>
            </div>

            <li
              className="liste"
              onClick={() => this.scrollToSection("accueil")}
            >
              Accueil
            </li>
            <li
              className="liste"
              onClick={() => this.scrollToSection("projets")}
            >
              Projets
            </li>
            <li
              className="liste"
              onClick={() => this.scrollToSection("skills")}
            >
              Compétences
            </li>
            <li
              className="liste"
              onClick={() => this.scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="line"></div>
      </nav>
    );
  }
}

export default Navbar;
