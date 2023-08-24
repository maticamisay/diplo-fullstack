const rootDiv = document.getElementById("root");

const h1 = document.createElement("h1");
h1.innerText = "Hola Mundo";

const alumno1 = document.createElement("div");
const alumno1Nombre = document.createElement("h2");
const alumno1Lenguaje = document.createElement("h3");
const alumno1Intereses = document.createElement("h3");

alumno1Nombre.innerText = "Juan";
alumno1Lenguaje.innerText = "Lenguaje: ❤";
alumno1Intereses.innerText = "Intereses: ";

const alumno2 = document.createElement("div");
alumno2.innerText = "Pedro";

const alumno3 = document.createElement("div");
alumno3.innerText = "Pablo";

rootDiv.appendChild(h1);
rootDiv.appendChild(alumno1);
alumno1.appendChild(alumno1Nombre);
alumno1.appendChild(alumno1Lenguaje);
alumno1.appendChild(alumno1Intereses);
