// HACER UN FETCH DE LA API DE PRODUCTOS
async function fetchApi() {
  const result = await fetch("https://fakestoreapi.com/products");
  return await result.json();
}

// OBTENER LOS PRODUCTOS GUARDADOS EN LOCALSTORAGE
const renderCarrito = async () => {
  const container = document.querySelector("#productos");
  const storage = JSON.parse(localStorage.getItem("products")) || [];
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
    // button.addEventListener("click", saveProduct);
    div.appendChild(button);
    container.appendChild(div);
  });
};

// MOSTRAR LOS PRODUCTOS EN EL CARRITO, OBTENIENDO LA INFORMACIÓN DEL FETCH
renderCarrito();
