import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode"
import { GlobalStyles } from "./components/globalStyles"
import { lightTheme, darkTheme } from "./components/themes"
import Toggle from "./components/toggler";

const App = () => {

  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
