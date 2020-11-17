// Funciones del ciclo de vida usadas comúnmente
import React from "react";

class Api extends React.Component {
  /** # Montaje
   * 1. El constructor para un componente React es llamado
   * antes de ser montado.
   */
  constructor(props) {
    super(props);
    // No llames this.setState() aquí!
    this.listRef = React.createRef();
  }

  /**
   * # Actualizacion
   * 2. Invoca justo antes de que la salida renderizada más reciente
   * se entregue, por ejemplo, al DOM.
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // ¿Estamos agregando nuevos elementos a la lista?
    // Captura la posición del scroll para que podamos ajustar el scroll después.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Si tenemos un valor snapshot, agregamos nuevos elementos
    // Ajusta el scroll para que los nuevos elementos no empujen a los viejos fuera de la vista
    // (snapshot aquí es el valor que regresa de getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }

  render() {
    return <div ref={this.listRef}>{/**..contents.. */}</div>;
  }
}

export default Api;
