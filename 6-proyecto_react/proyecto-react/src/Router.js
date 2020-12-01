import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
/** Componentes principales del Shared */
import Header from "./components/Header";
import Footer from "./components/Footer";
/** Componentes del Pages */
import Home from "./components/Home";
import Blog from "./components/Blog";
import Contacto from "./components/Contacto";
/** Componente 404 Page Not Found */
import PageNotFound from "./components/PageNotFound";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/** HEADER */}
        <Header />

        {/** CONTENT ARTICLES */}
        {/** CONFIGURACIÖN & PAGINACIÖN */}
        <Switch>
          {/** Ruta principal el home */}
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contacto" component={Contacto} />
          {/** Página no encontrada 404 */}
          <Route component={PageNotFound} />
        </Switch>
        <div className="clearfix"></div>
        {/** FOOTER */}
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
