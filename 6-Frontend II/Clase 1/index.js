import Alumno from "./Alumno.js";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hola Mundo"),
    React.createElement(Alumno, { nombre: "Juan", edad: 20 }),
    React.createElement(Alumno, { nombre: "Pedro" }),
    React.createElement(Alumno, { nombre: "Pablo" })
  );
};

const rootDiv = document.getElementById("root");
ReactDOM.render(React.createElement(App), rootDiv);
