import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { lightTheme, darkTheme } from "./components/themes";
import { GlobalStyles } from "./components/globalStyles";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";

import CovidInfoMain from "./components/CovidInfo/CovidInfoMain";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const appliedTheme = createMuiTheme({
    palette: {
      type: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={themeMode}>
      <MuiThemeProvider theme={appliedTheme}>
        <>
          <GlobalStyles />
          <Router>
            <div className="app">
              <Header theme={theme} toggleTheme={toggleTheme} />
              <Switch>
                <Route exact={true} path="/">
                  <Intro />
                </Route>
                <Route path="/vaccines" exact={true}>
                  <Home />
                </Route>
                <Route path="/covidinfo" exact={true}>
                  <CovidInfoMain />
                </Route>
                <Route path="/about" exact={true}>
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>
        </>
      </MuiThemeProvider>
    </ThemeProvider>
  );
};

export default App;
