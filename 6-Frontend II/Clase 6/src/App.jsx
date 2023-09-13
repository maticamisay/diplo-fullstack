import "./App.css";
import { useEffect, useState } from "react";
import ProductoCard from "./components/ProductCard/ProductoCard";
import SearchBar from "./components/Searchbar/Searchbar";

function App() {
  const [data, setData] = useState([]);
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    setDataFiltered(data);
  }, [data]);

  const handleSearch = (term, category) => {
    console.log("Buscando:", term);
    let filtered;
    if (term) {
      filtered = data.filter((producto) =>
        producto.title.toLowerCase().includes(term.toLowerCase())
      );
    }

    setDataFiltered(filtered);
  };

  return (
    <main className="bodyGlobal">
      <SearchBar onSearch={handleSearch} />
      <section className="container">
        {dataFiltered.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </section>
    </main>
  );
}

export default App;
