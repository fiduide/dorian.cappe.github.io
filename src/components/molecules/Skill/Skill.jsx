import SkillStyled from "./Skill.styled";

import oneStars from "assets/images/oneStars.png";
import twoStars from "assets/images/twoStars.png";
import threeStars from "assets/images/threeStars.png";
import forStars from "assets/images/forStars.png";
import fiveStars from "assets/images/fiveStars.png";
import { useContext } from "react";
import { DarkModContext } from "context/DarkModContext";

const Skill = (
  { title, stars, image } // === props par destructuration
) => {
  const { isDarkMode } = useContext(DarkModContext);
  let img;
  switch (stars) {
    case "5":
      img = fiveStars;
      break;
    case "4":
      img = forStars;
      break;
    case "3":
      img = threeStars;
      break;
    case "2":
      img = twoStars;
      break;
    case "1":
      img = oneStars;
      break;
    default:
      img = fiveStars;
      break;
  }

  return (
    <SkillStyled light={!isDarkMode ? true : false}>
      <img className="logo" src={image} alt="image logo web" />
      <div>
        <img src={img} alt="Star" />
        <div className="text">{title}</div>
      </div>
    </SkillStyled>
  );
};

export default Skill;
