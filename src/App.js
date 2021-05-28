import "./App.css";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import About from "./components/About/About";
import { GlobalStyles } from "./components/globalStyles";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main";
import { darkTheme, lightTheme } from "./components/themes";
import { useDarkMode } from "./components/useDarkMode";

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
                  <Main />
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
