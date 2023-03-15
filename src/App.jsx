import { Header } from "components/molecules";
import AppStyled from "./App.styled";
import Home from "containers/Home/Home";
import Jobs from "containers/Jobs/Jobs";
import Mailer from "containers/Mailer/Mailer";
import Skills from "containers/Skills/Skills";
import "assets/css/app.css";
import { Route } from "react-router-dom";
import { WavyContainer } from "react-wavy-transitions";
import { Switch } from "react-router-dom";
import { DarkModContext } from "context/DarkModContext";
import { useContext } from "react";

const App = () => {
  const { isDarkMode } = useContext(DarkModContext);
  return (
    <AppStyled light={!isDarkMode ? true : false}>
      <Header />
      <WavyContainer />
      <Switch>
        <Route path="/portfolio/" exact component={Home} />
        <Route path="/portfolio/about" exact component={Home} />
        <Route path="/portfolio/skills" exact component={Skills} />
        <Route path="/portfolio/recent-work" exact component={Jobs} />
        <Route path="/portfolio/contact" exact component={Mailer} />
      </Switch>
    </AppStyled>
  );
};

export default App;
