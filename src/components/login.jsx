import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "../data/usuario.json"; // tu archivo JSON

export default function Login({ onExito }) {
  const [usuario, setUsuario] = useState({ email: "", clave: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const searchUsuario = (e) => {
    e.preventDefault();

    // Buscar usuario en JSON
    const userFound = usuarios.find(
      (u) =>
        u.mail.toLowerCase() === usuario.email.toLowerCase() &&
        u.clave === usuario.clave
    );

    if (userFound) {
      setError("");
      onExito(userFound); // avisa al App.jsx que se logueó
      navigate("/"); // redirige al Home
    } else {
      setError("Usuario o clave incorrectos");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={searchUsuario}
        className="bg-white shadow-lg rounded-2xl p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h2>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={usuario.email}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />

        {/* Clave */}
        <input
          type="password"
          name="clave"
          placeholder="Contraseña"
          value={usuario.clave}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          required
        />

        {/* Botón */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Entrar
        </button>

        {/* Error */}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </form>
    </div>
  );
}
