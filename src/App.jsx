import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./components/login";
import SocioFilter from "./components/socios-filter"; // acá está tu listado de socios
import CardSocios from "./components/card-socio"; // detalle de un socio

export default function App() {
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Página de login */}
        <Route path="/login" element={<Login onExito={setUsuarioLogueado} />} />

        {/* Página inicial: lista de socios */}
        <Route
          path="/"
          element={usuarioLogueado ? <SocioFilter /> : <Navigate to="/login" />}
        />

        {/* Detalle de un socio */}
        <Route
          path="/socio/:id"
          element={usuarioLogueado ? <CardSocios /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
