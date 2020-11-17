import React, { useState, useEffect } from "react";

function Hook() {
  // Declara una nueva variable de estado, useState es un Hook
  const [count, setCount] = useState(0);
  // const [fruit, setFruit] = useState("mango");
  // const [todos, setTodos] = useState([{ text: "Aprendiendo Hooks" }]);

  // Similar a componentDidMount y componentDidUpdate:
  useEffect(() => {
    // Actualiza el titulo del documento usando la Browser API
    document.title = `Haz hecho clic ${count} veces`;
  });

  return (
    <div>
      <p>Haz hecho clic {count} veces.</p>
      <button onClick={() => setCount(count + 1)}>Haz Clic</button>
    </div>
  );
}

export default Hook;
