import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
// 1) definir rutas con react router dom:
// una para el inicio, otra para el login, otra para el carrito
// 2) crear una store global con zustand, al clickear un producto se agrega al carrito
// 3) consumir esta store en la página del carrito

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
