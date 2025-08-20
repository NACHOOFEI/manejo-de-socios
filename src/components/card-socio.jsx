import { useNavigate, useParams } from "react-router-dom";
import socios from "../data/socios (1).json";
import { User, Mail, Phone, BadgeCheck } from "lucide-react";

export default function CardSocios() {
  const { id } = useParams();
  const socio = socios.find((s) => s.id === parseInt(id));
  const navigate = useNavigate();

  if (!socio)
    return <p className="text-center text-red-500">❌ Socio no encontrado</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-xl relative">
      {/* Botón Back */}
      <button
        className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group mb-6"
        type="button"
        onClick={() => navigate("/")}
      >
        <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#000000"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#000000"
            ></path>
          </svg>
        </div>
        <p className="translate-x-2">Go Back</p>
      </button>

      {/* Encabezado */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-2">
        Detalle del Socio
      </h2>

      {/* Datos del socio */}
      <ul className="space-y-3 text-gray-700">
        <li className="flex items-center gap-2">
          <BadgeCheck className="text-sky-600" />{" "}
          <span className="font-semibold">ID:</span> {socio.id}
        </li>
        <li className="flex items-center gap-2">
          <User className="text-sky-600" />{" "}
          <span className="font-semibold">Nombre:</span> {socio.nombre}{" "}
          {socio.apellido}
        </li>
        <li className="flex items-center gap-2">
          🆔 <span className="font-semibold">DNI:</span> {socio.dni}
        </li>
        <li className="flex items-center gap-2">
          ⚧ <span className="font-semibold">Sexo:</span> {socio.sexo}
        </li>
        <li className="flex items-center gap-2">
          <Mail className="text-sky-600" />{" "}
          <span className="font-semibold">Email:</span> {socio.mail}
        </li>
        <li className="flex items-center gap-2">
          <Phone className="text-sky-600" />{" "}
          <span className="font-semibold">Teléfono:</span> {socio.telefono}
        </li>
        <li className="flex items-center gap-2">
          📌 <span className="font-semibold">Estado:</span>{" "}
          <span
            className={`px-3 py-1 rounded-full text-white ${
              socio.estado === "ACT" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {socio.estado}
          </span>
        </li>
      </ul>

      {/* Botón cambiar estado */}
      <div className="mt-6 text-center">
        <button className="px-5 py-2 border-2 rounded-full bg-sky-500 hover:bg-sky-700 text-white font-semibold shadow-md transition-all">
          Cambiar Estado
        </button>
      </div>
    </div>
  );
}
