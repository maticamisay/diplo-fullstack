import { useState } from "react";
import "./App.css";

const productos = [
  {
    id: 1,
    nombre: "Arroz Marolio",
    precio: 125,
  },
  {
    id: 2,
    nombre: "Fideos Lucchetti",
    precio: 70,
  },
];

function Saludo() {
  return <h1>Agrega tus productos al carrito</h1>;
}

const ProductItem = ({ producto, handleAddToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "1rem",
        gap: "1rem",
      }}
    >
      <h2>{producto.nombre}</h2>
      <h3>Precio: ${producto.precio}</h3>
      <button onClick={() => handleAddToCart(producto)}>
        Agregar al carrito
      </button>
    </div>
  );
};

const handleCalculateTotal = (carrito) => {
  return carrito.reduce(
    (acumulador, producto) => acumulador + producto.precio * producto.cantidad,
    0
  );
};

function App() {
  const [carrito, setCarrito] = useState([]);

  const handleAddToCart = (newProducto) => {
    const productoEnCarrito = carrito.find(
      (producto) => producto.id === newProducto.id
    );
    if (productoEnCarrito) {
      setCarrito((prevState) =>
        prevState.map((producto) =>
          producto.id === newProducto.id
            ? { ...producto, cantidad: producto.cantidad + 1 }
            : producto
        )
      );
      return;
    }

    setCarrito((prevState) => [...prevState, { ...newProducto, cantidad: 1 }]);
  };

  return (
    <>
      <div>
        <Saludo />
        {productos.map((producto) => (
          <ProductItem
            key={producto.id}
            producto={producto}
            handleAddToCart={handleAddToCart}
          />
        ))}
        <hr />
        <div>Items en el carrito: {carrito.length}</div>
        <div>Total en el carrito: {handleCalculateTotal(carrito)}</div>
        <button>Comprar</button>
      </div>
    </>
  );
}

export default App;
