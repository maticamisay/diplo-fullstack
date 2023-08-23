import { fetchApi } from "./utils/fetch.js";
import { renderHtmlProducts } from "./utils/html.js";
import { getLocalStorage, saveLocalStorage } from "./utils/localStorage.js";

async function renderProducts() {
  const products = await fetchApi();
  const db = getLocalStorage("db") || [];
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  const totalProducts = [...db, ...products];
  renderHtmlProducts(totalProducts, "Guardar", saveProduct);
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
