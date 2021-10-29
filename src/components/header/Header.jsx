import React from "react";
import { HeaderContainer, Menu } from "../../elements/Header";

const Header = () => {
  return (
    <header className="">
      <div className="wrapper">
        <HeaderContainer className="header-container">
          <h1 className="logo-name">Sopranos Karaoke</h1>
          <nav className="nav">
            <Menu className="menu">
              <li>
                <a href="#">Admin</a>
              </li>
              <li>
                <a href="#">Visita</a>
              </li>
            </Menu>
          </nav>
        </HeaderContainer>
      </div>
    </header>
  );
};

export default Header;
