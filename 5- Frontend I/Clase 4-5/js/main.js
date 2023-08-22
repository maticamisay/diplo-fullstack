import { fetchApi } from "./utils/fetch.js";
import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

async function renderProducts() {
  const products = await fetchApi();
  const container = document.querySelector("#productos");
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <h3>${product.title}</h3>
      <p>$ ${product.price}</p>
    `;
    const button = document.createElement("button");
    button.textContent = "Comprar";
    button.setAttribute("id", `productID-${product.id}`);
    button.addEventListener("click", saveProduct);
    div.appendChild(button);
    container.appendChild(div);
  });
}

const saveProduct = (event) => {
  const id = event.target.id.split("-")[1];
  const storage = getLocalStorage("products") || [];
  const index = storage.find((product) => product === id);
  if (!index) {
    storage.push(id);
  }
  saveLocalStorage("products", storage);
};

renderProducts();
