import React from "react";
import Sidebar from "./Sidebar";
import Slider from "./Slider";

class Contacto extends React.Component {
  render() {
    return (
      <div id="contacto">
        <Slider title="Contacto" size="slider-sm" />
        <div className="center">
          <section id="content-contact">
            <h2 className="subheader">Contáctanos</h2>
            <div className="col-lg-12">
              <form className="form-contact contact_form">
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Escribir Mensaje..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="name"
                        id="name"
                        type="text"
                        placeholder="Escribe tu nombre"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        className="form-control valid"
                        name="email"
                        id="email"
                        type="email"
                        placeholder="Escribe tu email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </section>
          {/** SIDEBAR */}
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default Contacto;
