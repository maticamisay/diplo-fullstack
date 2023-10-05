import { Link } from "react-router-dom";
import useCart from "../store/useCart";

const Cart = () => {
  const { cart, clearCart } = useCart();

  console.log(cart);
  return (
    <>
      <h1>Carrito React</h1>
      <button onClick={() => clearCart()}>Limpiar carrito</button>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            Id:{product.id}, Nombre: {product.nombre}, cantidad:{" "}
            {product.cantidad}
          </li>
        ))}
      </ul>
      <Link to="/finalizar-compra">Ir a pagar</Link>
    </>
  );
};

export default Cart;
