import React from "react";

// React.Component: es la clase base para los componentes de React
// cuando estos son definidos.
class Greeting extends React.Component {
  // Es el unico metodo requerido en un componente de clase
  render() {
    // Ejemplo con JSX para crear un elemento
    return <h1>Hola me llamo, {this.props.name}</h1>;
    // Ejemplo sin JSX para crear un elemento
    /* return React.createElement("div", null, `Hola me llamo ${this.props.name}`); */
  }
}

export default Greeting;
