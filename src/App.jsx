import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Usuarios from "./components/Usuarios/Usuarios";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/karaoke-users">
            <Usuarios />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
