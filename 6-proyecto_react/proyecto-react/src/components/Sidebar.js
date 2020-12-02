import React from "react";
import { Link } from "react-router-dom";

class Sidebar extends React.Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>Funciones rápidas</h3>
          <p>ReactWeb renderizaciones y aplicaciones reales.</p>
        </div>

        <div id="search" className="sidebar-item">
          <h3>Buscador:</h3>
          <p>Encuentra el artículo que buscas</p>
          <Link className="search-button" to="/buscador">
            Ir al Buscador
          </Link>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
