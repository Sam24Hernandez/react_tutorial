import React from "react";
import "./App.css";
import Greeting from "./Greeting";
import Text from "./Text";
import Hook from "./Hook";

/**
 * React.lazy() permite definir un componente que es cargado dinámicamente.
 * Esto ayuda a reducir el tamaño del bundle para demorar los componentes
 * de carga que no son usados durante la renderización inicial.
 */
const Lazy = React.lazy(() => import("./Lazy"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Cargando...</div>}>
        <section>
          <Lazy />
          <p>Aprendiendo React</p>
        </section>
      </React.Suspense>
      <header className="App-header">
        <Greeting name="Sam" />
        <Text />
        <h2>Introducción a los Hooks</h2>
        <Hook />
      </header>
    </div>
  );
}

export default App;
