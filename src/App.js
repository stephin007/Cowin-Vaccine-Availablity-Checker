import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./Themes/useDarkMode";
import { lightTheme, darkTheme } from "./Themes/themes";
import { GlobalStyles } from "./Themes/globalStyles";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";

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
