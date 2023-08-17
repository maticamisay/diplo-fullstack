async function fetchApi() {
  const result = await fetch("https://fakestoreapi.com/products");
  return await result.json();
}

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
  const storage = JSON.parse(localStorage.getItem("products")) || [];
  const index = storage.find((product) => product === id);
  if (!index) {
    storage.push(id);
  }
  localStorage.setItem("products", JSON.stringify(storage));
};

renderProducts();
