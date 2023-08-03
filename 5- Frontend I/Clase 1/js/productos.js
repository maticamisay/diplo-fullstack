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

const productosNode = document.querySelector("#productos");

const renderizarProductos = () => {
  const productosRenderizados = productos.map((producto) => {
    return `<li class='product'>${producto.nombre}</li>`;
  });
  console.log("sin join", productosRenderizados);
  console.log(productosRenderizados.join(""));
  productosNode.innerHTML = productosRenderizados.join("");
};
renderizarProductos();
