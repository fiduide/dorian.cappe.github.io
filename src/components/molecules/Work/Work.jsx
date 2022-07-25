import WorkStyled from "./Work.styled";
import { useContext } from "react";
import { DarkModContext } from "context/DarkModContext";

const Work = ({ order, title, text, languages, link, img }) => {
  const { isDarkMode } = useContext(DarkModContext);

  return (
    <WorkStyled order={order} light={!isDarkMode ? true : false}>
      <div className="flex-row">
        <div className={"left flex-row flex-center flex-align-center"}>
          <div className="text-align-left">
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            <div className="languages">{languages}</div>
            {link && (
              <div className="buttonAccess">
                <a target="_blank" href={link} rel="noreferrer">
                  Accéder
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={"right"}>
          <img src={img} alt="" />
        </div>
      </div>
    </WorkStyled>
  );
};

export default Work;
