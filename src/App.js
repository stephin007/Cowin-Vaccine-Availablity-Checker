import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <Main />
          </Route>
          <Route path="/vaccines" exact={true}>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
