import React, { useEffect } from "react";
import { usePagesStore } from "./store/usePagesStore";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// const App = () => {
//   const { page, navigateTo } = usePagesStore();
//   return (
//     <>
//       <h1>Pagina: {page}</h1>
//       <button onClick={() => navigateTo("home")}>Home</button>
//       <button onClick={() => navigateTo("about")}>About</button>
//       <a href="/nosotros">Nosotros</a>
//       {page === "home" && <Home />}
//       {page === "about" && <h1>About</h1>}
//     </>
//   );
// };

const HomePage = () => {
  return (
    <>
      <h1>Login form</h1>
      mostrar formulario, guardar en una store el nombre de usuario
      <Link to={"/productos"}>Ir a productos.</Link>
    </>
  );
};

const ProductsPage = () => {
  useEffect(() => {
    console.log("ProductsPage");
  }, []);
  return (
    <>
      <h1>Productos Page</h1>
      si no hay usuario, mostrar un mensaje de volver a login
      <Link to={"/"}>Ir al error.</Link>
      si hay usuario, mostrar los productos
    </>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route
          path="*"
          element={
            <>
              <h1>Página no encontrada</h1>
              <Link to={"/"}>Ir al inicio.</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
