import React from "react";
import logo from "../assets/img/logo/logo.svg";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/** LOGO */}
          <div id="logo">
            <img src={logo} alt="Logotipo" className="app-logo" />
            <span id="brand">
              <strong>React</strong>Web
            </span>
          </div>
          {/** MENÚ */}
          <nav id="menu">
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/acerca" activeClassName="active">
                  Acerca
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" activeClassName="active">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" activeClassName="active">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default Header;
