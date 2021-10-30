import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Usuarios from "./components/Usuarios/Usuarios";
import UserBoxProvider from "./context/UserBox";
import "./index.css";

const App = () => {
  return (
    <UserBoxProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/user-page">
            <Usuarios />
          </Route>
        </Switch>
      </Router>
    </UserBoxProvider>
  );
};

export default App;
