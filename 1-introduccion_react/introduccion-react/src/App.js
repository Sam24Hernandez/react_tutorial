import logo from './logo.svg';
import './App.css';

// Uso de JSX

const element = <p>¡Bienvenidos a la Introducción a React!</p>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {element}
      </header>
    </div>
  );
}

export default App;
