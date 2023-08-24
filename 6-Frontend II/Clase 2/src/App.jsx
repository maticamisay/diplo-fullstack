import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const title = "Hola Mundo desde JSX";
  // const [state, setState] = useState(initialState)
  const [contador, setContador] = useState(5);
  const [nombre, setNombre] = useState("Esteban");

  const handleIncrement = () => {
    setContador((prevState) => prevState + 1);
  };

  const handleDecrement = () => {
    setContador((prevState) => prevState - 1);
  };

  const handleNameChange = () => {
    const names = ["Juan", "Pedro", "Pablo", "Esteban"];
    setNombre(names[Math.floor(Math.random() * names.length)]);
  };

  return (
    <>
      <h1>{title}</h1>
      <Button
        textButton="Restar uno"
        bg="red"
        functionButton={handleDecrement}
      />
      <h2>Contador: {contador}</h2>
      <Button
        textButton="Sumar uno"
        bg="blue"
        functionButton={handleIncrement}
      />

      <div>
        <h2>Nombre: {nombre}</h2>
        <Button
          textButton="Cambiar nombre"
          bg="green"
          functionButton={handleNameChange}
        />
      </div>
    </>
  );
}

export default App;
