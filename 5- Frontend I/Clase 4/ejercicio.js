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
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>${product.price}</p>
    `;
    container.appendChild(div);
  });
}

getProducts();
