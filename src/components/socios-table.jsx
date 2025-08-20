import { useNavigate } from "react-router-dom";

export default function SociosTable({ socios }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th>Socio</th>
            <th>DNI</th>
            <th>Sexo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {socios.map((socio) => (
            <tr
              key={socio.id}
              className={`border-b last:border-b-0 hover:bg-blue-500 cursor-pointer ${
                socio.estado === "ACT" ? "bg-green-500" : "bg-red-500"
              }`}
              onClick={() => navigate(`/socio/${socio.id}`)}
            >
              <td>
                {socio.apellido} {socio.nombre}
              </td>
              <td>{socio.dni}</td>
              <td>{socio.sexo}</td>
              <td>{socio.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
