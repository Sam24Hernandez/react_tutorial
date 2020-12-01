import React from "react";
import logo from "../assets/img/logo/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/** LOGO */}
          <div id="logo">
            <img src={logo} alt="Logotipo" className="app-logo" />
            <span id="brand">
              {" "}
              <strong>React</strong>Web
            </span>
          </div>
          {/** MENÚ */}
          <nav id="menu">
            <ul>
              <li>
                <a href="index.html">Inicio</a>
              </li>
              <li>
                <a href="form.html">Acerca</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contacto.html">Contacto</a>
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
