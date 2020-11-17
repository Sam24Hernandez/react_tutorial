// Fragmentos y Refs
import React from "react";

class Text extends React.Component {
  constructor(props) {
    super(props);
    /**
     * React.createRef crea un ref que puede ser adjunto a los elementos
     * React por medio del atributo ref.
     */
    this.inputRef = React.createRef();
  }

  render() {
    // Ahora puedes obtener un ref directamente al botón del DOM
    const ref = React.createRef();

    return (
      /**
       * El componente React.Fragment permite retornar elementos
       * múltiples en un render() sin crear un elemento DOM adicional
       */
      <React.Fragment>
        Algo de texto
        <h2>Encabezado</h2>
        <input type="text" ref={this.inputRef} />
        <FancyButton ref={ref}>Haz clic!</FancyButton>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }
}

/**
 * React.forwarRef crea un componente React que envía el atributo ref que
 * recibe a otro componente más abajo en el árbol.
 * Acepta una función de renderizado como un argumento.
 */
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

export default Text;
