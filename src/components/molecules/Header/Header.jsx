import HeaderStyled from "./Header.styled";
import { WavyLink } from "react-wavy-transitions";
import imageHomeSrc from "../../../assets/images/home.png";
import next from "../../../assets/images/next.png";
import user from "../../../assets/images/user.png";
import skills from "../../../assets/images/skill.png";
import work from "../../../assets/images/suitcase.png";
import mail from "../../../assets/images/email.png";
import { Burger } from "components/molecules";
import { useContext, useState } from "react";
import { DarkModContext } from "context/DarkModContext";
const Header = () => {
  const { isDarkMode, isLightMod, handleClick } = useContext(DarkModContext);

  const [isOpen, setOpen] = useState(false);

  function handleClickHeader(setting) {
    if (setting == null) {
      setOpen(!isOpen);
    } else {
      setOpen(setting);
    }
  }

  return (
    <>
      <Burger handleClickHeader={handleClickHeader} />
      <HeaderStyled
        isOpen={!isOpen ? true : false}
        light={!isDarkMode ? true : false}
      >
        <div className="top">
          <div className="firstButton d-flex align-items-center space-between">
            <WavyLink to="/" waveColor={isDarkMode ? "b9b9b9" : "#e8e8ed"}>
              <div className="d-flex align-items-center">
                <img src={imageHomeSrc} alt="home" />
                Accueil
              </div>
            </WavyLink>

            <img
              src={next}
              alt="arrow"
              className="arrowNext"
              onClick={() => handleClickHeader()}
            />
          </div>

          <WavyLink to="/about" waveColor={isDarkMode ? "b9b9b9" : "#e8e8ed"}>
            <div
              className="d-flex align-items-center"
              onClick={() => handleClickHeader(false)}
            >
              <img src={user} alt="" /> Description
            </div>
          </WavyLink>

          <WavyLink to="/skills" waveColor={isDarkMode ? "b9b9b9" : "#e8e8ed"}>
            <div
              className="d-flex align-items-center"
              onClick={() => handleClickHeader(false)}
            >
              <img src={skills} alt="" /> Compétences
            </div>
          </WavyLink>
          <WavyLink
            to="/recent-work"
            waveColor={isDarkMode ? "b9b9b9" : "#e8e8ed"}
          >
            <div
              className="d-flex align-items-center"
              onClick={() => handleClickHeader(false)}
            >
              <img src={work} alt="" /> Travaux récents
            </div>
          </WavyLink>
          <WavyLink to="/contact" waveColor={isDarkMode ? "b9b9b9" : "#e8e8ed"}>
            <div
              className="d-flex align-items-center"
              onClick={() => handleClickHeader(false)}
            >
              <img src={mail} alt="" /> Contact
            </div>
          </WavyLink>
        </div>
        <div className="bottom">
          <h3>Apparence du thème</h3>
          <div className="row">
            <label className="switch">
              <input type="checkbox" onClick={(e) => handleClick(e)} />
              <span className="slider round"></span>
            </label>
            <p>{isLightMod}</p>
          </div>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
