import React, { useEffect, useState } from "react";
import useCheckLogin from "../hooks/useCheckLogin";
import useUserLogin from "../store/useUserLogin";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useCheckLogin();
  const { user } = useUserLogin();
  const fetchTodos = async () => {
    const response = await fetch("http://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
      return;
    }
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [searchTerm]);

  return (
    <>
      <h1>React App</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredProducts
        ? filteredProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              {user.rol === "admin" && (
                <button onClick={() => console.log(product)}>Editar</button>
              )}
              {user.rol === "customer" && (
                <button onClick={() => console.log(product)}>Comprar</button>
              )}
            </div>
          ))
        : null}
    </>
  );
};

export default Home;
