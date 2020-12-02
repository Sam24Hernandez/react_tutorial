import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section id="content-page" className="error-page">
      <div className="error-box">
        <div className="error-body text-center">
          <h1>404</h1>
          <h3 className="text-uppercase">¡Página No Encontrada!</h3>
          <p className="text-muted mt-3 mb-3">
            La página que tratas de buscar no existe.
          </p>
          <Link to="/home" className="btn btn-info btn-rounded mb-4">
            Volver al home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
