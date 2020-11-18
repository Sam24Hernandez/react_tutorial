import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Usando Redux</h1>  
        <h2>Contador {counter}</h2>
        <button onClick={() => dispatch(increment())}>+</button>  
        &nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
      </header>
    </div>
  );
}

export default App;
