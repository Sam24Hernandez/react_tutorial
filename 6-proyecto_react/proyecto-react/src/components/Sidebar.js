import React from "react";

class Sidebar extends React.Component {
  render() {
    return (
      <aside id="sidebar">
        <div id="nav-blog" className="sidebar-item">
          <h3>Puedes hacer esto:</h3>
          <a href="form.html">Crear artículo</a>
        </div>

        <div id="search" className="sidebar-item">
          <h3>Buscador:</h3>
          <p>Encuentra el artículo que buscas</p>
          <form>
            <input
              type="search"
              placeholder="Buscar..."
              className="search-section"
              name="search"
            />
            <input
              type="submit"
              className="search-button"
              value="Buscar"
              name="submit"
            />
          </form>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
