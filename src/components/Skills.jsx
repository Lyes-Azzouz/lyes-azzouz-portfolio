import React, { useState } from "react";
import "../styles/components/skills.scss";
import Collapse from "./Collapse";

const Skills = () => {
  // État pour stocker les compétence sélectionnées par l'utilisateur
  const [selectedSkills, setSelectedSkills] = useState({
    // Définit les check box sur false pour que les menu ne soient pas ouvert par défaut
    "Front-end": false,
    "Back-end": false,
    "Base de données": false,
    "Gestion de version": false,
    Logiciels: false,
    "Outils de développement": false,
    "Gestion de projets & Communication": false,
  });

  // Fonction qui gère les modifications de la sélection de compétences
  const handleSkillToggle = (skill) => {
    setSelectedSkills((prevState) => ({
      ...prevState,
      [skill]: !prevState[skill], // Inverse la valeur des compétences
    }));
  };

  return (
    <section className="skills">
      <div className="sidebar">
        <h1>Mes compétences</h1>
        <p id="subtitle">
          Dans cette section, vous trouverez toutes les compétences acquises par
          la pratique des différents langages et des différentes technologies
          utilisées dans le cadre du développement web. <br />
        </p>
        <span id="check-msg">
          Afin de faciliter la visibilité des compétences , cochez les check-box
          des menus qui vous intéressent , puis déplier le contenu de chaque
          compétences en appuyant sur le bouton "+".
        </span>
        <div className="filter-bar">
          {Object.keys(selectedSkills).map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                checked={selectedSkills[skill]}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <div className="sidebar-content">
          <div className="column-1">
            <div className="techno-front">
              <span>Front-end</span>
              {selectedSkills["Front-end"] && (
                <div>
                  <Collapse
                    title={"Javascript"}
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    }
                  />
                  <Collapse
                    title={"Html"}
                    content={"Urna neque viverra justo nec ultrices..."}
                  />
                  <Collapse title={"Css"} content={"je test"} />
                  <Collapse title={"Sass"} content={"je test"} />
                  <Collapse title={"React"} content={"je test"} />
                  <Collapse title={"Responsive Desing"} content={"je test"} />
                </div>
              )}
            </div>
            <div className="techno-back">
              <span>Back-end</span>
              {selectedSkills["Back-end"] && (
                <div>
                  <Collapse title={"Node.js"} content={"je test"} />
                  <Collapse title={"Express.js"} content={"je test"} />
                  <Collapse title={"Api RESTful"} content={"je test"} />
                  <Collapse title={"Bcrypt"} content={"je test"} />
                </div>
              )}
            </div>
            <div className="bdd">
              <span>Base de données</span>
              {selectedSkills["Base de données"] && (
                <div>
                  <Collapse title={"MongoDB"} content={"Je test"} />
                </div>
              )}
            </div>

            <div className="versioning">
              <span className="v">Gestion de version</span>
              {selectedSkills["Gestion de version"] && (
                <div>
                  <Collapse title={"Git"} content={"test"} />
                  <Collapse title={"GitHub"} content={"test"} />
                </div>
              )}
            </div>
          </div>
          <div className="column-2">
            <div className="logiciels">
              <span className="sw">Logiciels</span>
              {selectedSkills["Logiciels"] && (
                <div>
                  <Collapse title={"VsCode"} content={"test"} />
                  <Collapse title={"3dsmax"} content={"test"} />
                  <Collapse title={"Figma"} content={"test"} />
                  <Collapse title={"Gimp"} content={"test"} />
                </div>
              )}
            </div>

            <div className="dev-tools">
              <span className="dt">Outils de développement</span>
              {selectedSkills["Outils de développement"] && (
                <div>
                  <Collapse title={"Google DevTool"} content={"test"} />
                  <Collapse title={"Google Lighthouse"} content={"test"} />
                  <Collapse title={"Waze"} content={"test"} />
                  <Collapse title={"Json web token"} content={"test"} />
                  <Collapse title={"Shemas.org"} content={"test"} />
                  <Collapse title={"JSONVue"} content={"test"} />
                  <Collapse title={"Talent Api tester"} content={"test"} />
                  <Collapse title={"Postman"} content={"test"} />
                  <Collapse title={"Swagger"} content={"test"} />
                  <Collapse title={"Regex101"} content={"test"} />
                </div>
              )}
            </div>
            <div className="communication">
              <span className="com">Gestion de projets & Communication</span>
              {selectedSkills["Gestion de projets & Communication"] && (
                <div>
                  <Collapse title={"Trello"} content={"test"} />
                  <Collapse title={"Microsoft Teams"} content={"test"} />
                  <Collapse title={"Slack"} content={"test"} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
