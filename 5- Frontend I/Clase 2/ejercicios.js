// Ejercicio 1
// - obtener el nodo del boton
// - agregarle un evento de mouseover al boton
// - obtener el nodo padre, acceder al precio
// - mostrar con un alert('Precio: ', precio)
let detailsButton = document.querySelector("article button");
let parentDetails = detailsButton.parentNode;
let detailsPrice = parentDetails.querySelector("#precio-2");

function showDetails() {
  alert(`Detalles del producto: Precio $${detailsPrice.textContent}`);
}

detailsButton.addEventListener("mouseover", showDetails);

// Ejercicio 2

let grandparent = document.querySelector("#grandparent");
let parent2 = document.querySelector("#parent-2");
let child2 = document.querySelector("#child-2");

grandparent.addEventListener("click", () => {
  console.log("click grandparent");
});

parent2.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click parent-2");
});

child2.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("click child-2");
});
