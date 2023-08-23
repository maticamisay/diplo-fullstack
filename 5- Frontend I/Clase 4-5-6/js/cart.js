import { fetchApi } from "./utils/fetch.js";
import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

const renderCarrito = async () => {
  const container = document.querySelector("#productos");
  const storage = getLocalStorage("products") || [];
  const productos = await fetchApi();

  const cartProducts = productos.filter((product) => {
    return storage.includes(product.id.toString());
  });

  cartProducts.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${product.title}</h3>
      <p>$ ${product.price}</p>
    `;
    const button = document.createElement("button");
    button.textContent = "Eliminar";
    button.setAttribute("id", `productID-${product.id}`);
    button.addEventListener("click", deleteEvent);
    div.appendChild(button);
    container.appendChild(div);
  });
};

const deleteEvent = (event) => {
  const nodo = event.target.parentNode;
  nodo.remove();
  const id = event.target.id.split("-")[1];
  const storage = getLocalStorage("products") || [];
  const filtered = storage.filter((product) => product !== id);
  saveLocalStorage("products", filtered);
};

renderCarrito();
