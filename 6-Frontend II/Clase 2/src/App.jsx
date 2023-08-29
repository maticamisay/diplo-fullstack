import { useState } from "react";
import Title from "./components/text/Title";
import Subtitle from "./components/text/Subtitle";

const App = () => {
  const [nombre, setNombre] = useState("Esteban");
  return (
    <>
      <section>
        <Title text="Hola Mundo desde JSX" />
        <Subtitle text="Esto es un subtítulo" />
        <h3>Nombre: {nombre}</h3>
      </section>
      <div>Hola</div>
    </>
  );
};

export default App;
