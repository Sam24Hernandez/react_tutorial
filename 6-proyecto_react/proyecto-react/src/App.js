import "./assets/css/App.css";

// Importar Componentes
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/** HEADER */}
      <Header />
      {/** SLIDER */}
      <Slider />
      {/** SIDEBAR */}
      <Sidebar />
      {/** FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
