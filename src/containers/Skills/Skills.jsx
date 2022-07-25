import SkillsStyled from "./Skills.styled";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";

import html from "../../assets/images/logo/html.png";
import bootstrap from "../../assets/images/logo/bootstrap.png";
import css from "../../assets/images/logo/css.png";
import java from "../../assets/images/logo/java.png";
import php from "../../assets/images/logo/php.png";
import jquery from "../../assets/images/logo/jquery.png";
import c from "../../assets/images/logo/c.png";
import sass from "../../assets/images/logo/sass.png";
import symfony from "../../assets/images/logo/symfony.png";
import wordpress from "../../assets/images/logo/wordpress.png";
import mysql from "../../assets/images/logo/mysql.png";
import sqlite from "../../assets/images/logo/sqlite.png";
import mongodb from "../../assets/images/logo/mongodb.png";
import git from "../../assets/images/logo/git.png";
import postman from "../../assets/images/logo/postman.png";
import pwa from "../../assets/images/logo/pwa.png";
import dart from "../../assets/images/logo/dart.png";

import js from "../../assets/images/logo/js.png";
import nodejs from "../../assets/images/logo/node-js.png";
import react from "../../assets/images/logo/react.png";
import { Skill } from "components/molecules";

const Skills = () => {
  const { isDarkMode } = useContext(DarkModContext);

  return (
    <SkillsStyled light={!isDarkMode ? true : false}>
      <h1>Mes compétences</h1>
      <div className="containerProgress">
        <div className="colOne">
          <h2>Développement Web</h2>
          <Skill image={html} title="HTML" stars="5"></Skill>
          <Skill image={css} title="CSS" stars="5"></Skill>
          <Skill image={bootstrap} title="Bootstrap" stars="5"></Skill>
          <Skill image={sass} title="SASS" stars="4"></Skill>
          <Skill image={pwa} title="PWA" stars="3"></Skill>
        </div>
        <div className="colOne">
          <h2>Programmation</h2>
          <Skill image={js} title="JS" stars="5"></Skill>

          <Skill image={php} title="PHP" stars="4"></Skill>
          <Skill image={java} title="Java" stars="4"></Skill>
          <Skill image={c} title="C" stars="4"></Skill>
          <Skill image={dart} title="Dart / Flutter" stars="3"></Skill>
        </div>
        <div className="colOne">
          <h2>Framework JS</h2>
          <Skill image={jquery} title="JQuery" stars="5"></Skill>
          <Skill image={react} title="React JS" stars="4"></Skill>
          <Skill image={nodejs} title="Node JS" stars="3"></Skill>
          <h2>Framework PHP</h2>
          <Skill image={symfony} title="Symfony 5/6" stars="4"></Skill>
        </div>

        <div className="colOne">
          <h2>CMS</h2>
          <Skill image={wordpress} title="WordPress" stars="3"></Skill>
          <h2>Outils</h2>
          <Skill image={git} title="Git" stars="4"></Skill>
          <Skill image={postman} title="Postman" stars="4"></Skill>
        </div>
        <div className="colOne">
          <h2>Base de donnée</h2>
          <Skill image={mysql} title="Mysql" stars="5"></Skill>
          <Skill image={sqlite} title="SQLite" stars="5"></Skill>
          <Skill image={mongodb} title="MongoDB" stars="3"></Skill>
        </div>
      </div>
    </SkillsStyled>
  );
};

export default Skills;
