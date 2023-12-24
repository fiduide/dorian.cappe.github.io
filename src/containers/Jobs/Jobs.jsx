import JobsStyled from "./Jobs.styled";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";
import { Work } from "components/molecules";
import clubtravaux from "../../assets/images/pc_clubtravaux.png";
import foodchief from "../../assets/images/pc_foodchief.png";
import equinaya from "../../assets/images/pc_equinaya.png";

import inte from "../../assets/images/pc_integration.png";
import portfolio from "../../assets/images/pc_portfolio.png";

const Jobs = () => {
  const { isDarkMode } = useContext(DarkModContext);

  return (
    <JobsStyled light={!isDarkMode ? true : false}>
      <Work
        order="first"
        title="Equinaya"
        text="Artisanat/Massage Équin et Canin"
        languages="HTML, CSS, JS, PHP"
        img={equinaya}
        link="https://equinaya.fr"
      ></Work>
      <Work
        order="second"
        title="FoodChief"
        text="Search your favorite Recipe"
        languages="ReactJS"
        img={foodchief}
        link="https://fiduide.github.io/foodchief/"
      ></Work>
      <Work
        order="first"
        title="ClubTravaux"
        text="Trouver des prospects pour vos travaux"
        languages="WordPress, PHP, JS"
        img={clubtravaux}
        link="https://www.clubtravaux.com/"
      ></Work>
      <Work
        order="second"
        title="Intégration Web"
        text="Intégration de différentes Landing Pages pour différentes entreprises"
        languages="HTML, CSS, JS"
        img={inte}
      ></Work>
      <Work
        order="first"
        title="PortFolio"
        text="Mon site réunissant tous mes projets réalisés accesssibles durant ma vie professionnelle"
        languages="ReactJS, SCSS"
        img={portfolio}
      ></Work>
    </JobsStyled>
  );
};

export default Jobs;
