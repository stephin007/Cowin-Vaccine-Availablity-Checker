import "./App.css";

import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/globalStyles";
import Home from "./components/Home/Home";
import { darkTheme, lightTheme } from "./components/themes";
import Toggle from "./components/toggler";
import { useDarkMode } from "./components/useDarkMode";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="app">
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <Home />
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
