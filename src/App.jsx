import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminPage from "./components/admin/Admin-page";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Admin from "./components/login/Admin";
import Login from "./components/login/Login";
import Usuarios from "./components/Usuarios/Usuarios";
import UserAdminProvider from "./context/AdminContext";
import PassClientsProvider from "./context/PassClients";
import UserBoxProvider from "./context/UserBox";
import "./index.css";

const App = () => {
  return (
    <UserBoxProvider>
      <UserAdminProvider>
        <PassClientsProvider>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/admin-page">
                <AdminPage />
              </Route>
              <Route path="/user-page">
                <Usuarios />
              </Route>
            </Switch>
          </Router>
        </PassClientsProvider>
      </UserAdminProvider>
    </UserBoxProvider>
  );
};

export default App;
