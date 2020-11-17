import "./App.css";
import NameForm from "./NameForm";
import EssayForm from "./EssayForm";
import FlavorForm from "./FlavorForm";
import Reservation from "./Reservation";

import Calculator from "./Calculator";
import WelcomeDialog from "./WelcomeDialog";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Formularios en React</h2>
        <NameForm />
        <EssayForm />
        <FlavorForm />
        <Reservation />
      </header>
      <h2>Levantando el estado</h2>
      <Calculator />
      <hr />
      <h2>Composición vs. Herencia</h2>
      <WelcomeDialog />
    </div>
  );
}

export default App;
