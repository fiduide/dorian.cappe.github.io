import SkillsStyled from "./Skills.styled";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "context/AnimatedProgressProvider";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";

import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import nodejs from "../../assets/images/node-js.png";
import react from "../../assets/images/react.png";

const Skills = () => {
  const { isDarkMode } = useContext(DarkModContext);

  return (
    <SkillsStyled light={!isDarkMode ? true : false}>
      <h1>Mes compétences</h1>
      <div className="containerProgress">
        <div className="progress">
          <h3>
            <img src={html} />
            HTML
          </h3>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={100}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({
                    pathTransition: "none",
                    textSize: "16px",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
        <div className="progress">
          <h3>
            <img src={css} />
            CSS
          </h3>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={100}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({
                    pathTransition: "none",
                    textSize: "16px",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
        <div className="progress">
          <h3>
            <img src={js} />
            JS
          </h3>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={90}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({
                    pathTransition: "none",
                    textSize: "16px",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>

        <div className="progress">
          <h3>
            <img src={react} />
            React
          </h3>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={75}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({
                    pathTransition: "none",
                    textSize: "16px",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>

        <div className="progress">
          <h3>
            <img src={nodejs} />
            Node JS
          </h3>
          <AnimatedProgressProvider
            valueStart={0}
            valueEnd={65}
            duration={1.4}
            easingFunction={easeQuadInOut}
          >
            {(value) => {
              const roundedValue = Math.round(value);
              return (
                <CircularProgressbarWithChildren
                  value={value}
                  text={`${roundedValue}%`}
                  styles={buildStyles({
                    pathTransition: "none",
                    textSize: "16px",
                  })}
                />
              );
            }}
          </AnimatedProgressProvider>
        </div>
      </div>
    </SkillsStyled>
  );
};

export default Skills;
