import React from "react";
import "../assets/css/Acerca.css";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Acerca extends React.Component {
  
  render() {
    return (
      <div id="acerca">
        <Slider title="Acerca de" size="slider-sm" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Crush de Sam Hernández</h2>
            {/** listado de chicas que me gustan */}
            <label>
              Nombre de la chica
              <input className="form-control" />
            </label>{" "}
            <Button color="success">añadir</Button>
            <div id="articles">
              <ul className="users">
                <li>
                  <Link to="/home">
                    <span class="badge">11</span> Ivana Alarcón
                  </Link>
                  <Button
                    color="danger"
                    className="crush-button"
                    title="eliminar crush :("
                  >
                    x
                  </Button>
                </li>
              </ul>
            </div>
          </section>
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Acerca;
