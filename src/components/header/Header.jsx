import React, { useContext } from "react";
import { HeaderContainer, Menu } from "../../elements/Header";
import { NavLink } from "react-router-dom";
import { UserBoxContext } from "../../context/UserBox";

const Header = () => {
  const { showForm, setShowForm } = useContext(UserBoxContext);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <header className="">
      <div className="wrapper">
        <HeaderContainer className="header-container">
          <NavLink className="logo-name" to="/">
            Sopranos Karaoke
          </NavLink>
          <nav className="nav">
            <Menu className="menu">
              <li>
                <NavLink to="/admin" onClick={handleClick}>
                  Admin
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={handleClick}>
                  Visita
                </NavLink>
              </li>
            </Menu>
          </nav>
        </HeaderContainer>
      </div>
    </header>
  );
};

export default Header;
