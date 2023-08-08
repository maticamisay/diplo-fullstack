// ===========================
// first example
// ===========================

let button = document.querySelector("button");
// acceder al parentButton node del button
let parentButton = button.parentNode;
// acceder al h1 dentro de parentButton
let precio = parentButton.querySelector("#precio-1");

function callback() {
  console.log(`Precio del producto: $ ${precio.textContent}`);
}

button.addEventListener("click", callback);

// ===========================
// second example
// ===========================
let parent = document.querySelector("#parent");
let child = document.querySelector("#children");
parent.addEventListener("click", () => {
  console.log("click parent");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click child");
});

// ===========================
// third example
// ===========================
let form = document.querySelector("#form-example");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.querySelector("#nombre_alumno").value;
  console.log(`Nombre del alumno: ${name}`);

  // limpiar el nombre
  document.querySelector("#nombre_alumno").value = "";
});

// ===========================
// fourth example
// ===========================
const productos = [
  {
    id: 1,
    nombre: "Producto 1",
  },
  {
    id: 2,
    nombre: "Producto 2",
  },
];

let reactExample = document.querySelector("#react-example");

// renderizar el array de productos dentro de él como ul
let ul = document.createElement("ul");
productos.forEach((producto) => {
  let li = document.createElement("li");
  li.textContent = producto.nombre;
  ul.appendChild(li);
});

reactExample.appendChild(ul);
