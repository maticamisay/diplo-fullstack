import { useEffect, useState } from "react";
import Button from "./components/Button";
async function fetchApi() {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const data = await respuesta.json();
  return data;
}

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchApi().then((data) => {
      console.log("api was fetched"), setProducts(data);
    });
  }, [count]);

  return (
    <>
      <Button setCount={setCount} count={count} />
      <h1>Total de productos: {products.length}</h1>
    </>
  );
}

export default App;
