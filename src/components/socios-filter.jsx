import SociosTable from "./socios-table";
import { useState } from "react";
import sociosJson from "../data/socios (1).json";

export default function SociosFilter({ handleclick }) {
  const [socio, setSocio] = useState({ apellido: "", estado: "" });

  const sociosSearch = sociosJson.filter((value) => {
    const apellidoOk = value.apellido
      .toLowerCase()
      .includes(socio.apellido.toLowerCase());

    const estadoOk =
      socio.estado === "" ||
      value.estado.toLowerCase() === socio.estado.toLowerCase();

    return apellidoOk && estadoOk;
  });

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Listado de Socios</h1>

      <form className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <input
          type="text"
          value={socio.apellido}
          placeholder="Apellido del socio"
          onChange={(e) => setSocio({ ...socio, apellido: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-2/3 shadow-sm"
        />

        <select
          value={socio.estado}
          onChange={(e) => setSocio({ ...socio, estado: e.target.value })}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-1/3 shadow-sm"
        >
          <option value="">Todos</option>
          <option value="BAJ">Baja</option>
          <option value="ACT">Activo</option>
        </select>
      </form>

      <SociosTable socios={sociosSearch} handleClick={handleclick} />
    </div>
  );
}
