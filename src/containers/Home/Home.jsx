import HomeStyled from "./Home.styled";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";
import background from "../../assets/images/hero.svg";
import avatar from "../../assets/images/avatar.png";

const Home = () => {
  const { isDarkMode } = useContext(DarkModContext);

  return (
    <HomeStyled light={!isDarkMode ? true : false}>
      <div className="first-content">
        <div className="title center">
          <h1>Développeur FullStack</h1>
          <h2>
            Je conçois, code des choses en m'amusant, et j'adore ce que je fais
            !
          </h2>
        </div>
        <div className="middle center">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="bottom">
          <img src={background} alt="background" />
        </div>
      </div>

      <div className="second-content">
        <div className="content">
          <h2>Bonjour, je m'appelle Dorian.</h2>
          <p>
            Depuis le début de mon parcours scolaire, j'ai toujours rêvé de
            rentrer dans le monde du développement informatique et depuis
            maintenant 3 ans, c'est chose faite !
            <br />
            <br />
            Après deux ans d'alternance en tant que développeur FullStack, je me
            lance aujourd'hui dans une nouvelle aventure (le travail). Je suis
            quelqu'un de motiver avec une soif d'apprentissage hors du commun !
            <br />
            <br />
            Alors n'hésitez pas à me contacter pour en savoir plus !
          </p>
        </div>
      </div>
    </HomeStyled>
  );
};

export default Home;
