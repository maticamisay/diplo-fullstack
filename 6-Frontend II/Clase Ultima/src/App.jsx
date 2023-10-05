import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
// 1) definir rutas con react router dom:
// una para el inicio, otra para el login, otra para el carrito
// 2) crear una store global con zustand, al clickear un producto se agrega al carrito
// 3) consumir esta store en la página del carrito

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/carrito"
            element={
              <MainLayout>
                <Cart />
              </MainLayout>
            }
          />
          <Route
            path="/finalizar-compra"
            element={
              <MainLayout>
                <h1>Page jeje</h1>
                <h2>Ingrese los datos de envio</h2>
              </MainLayout>
            }
          />
          <Route path="/login" element={<Login />} />
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
    </>
  );
};

export default App;
