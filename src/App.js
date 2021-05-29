import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.container}>
        <Header />
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
  );
};

export default App;
