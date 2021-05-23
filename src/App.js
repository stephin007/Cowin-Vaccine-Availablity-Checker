import "./App.css";

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main";

const App = () => {
  return (<Router><div className = "app"><Header /><Switch>
          <Route exact = {true} path = "/"><Main />
          </Route>
          <Route path="/vaccines " exact={true}>
           < Home /></Route>
          <Route path="/about " exact={true}>
                     < About /></Route>
        </Switch></div>
    </Router>);
};

export default App;
