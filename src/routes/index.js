import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { Editar } from "../pages/Editar";
import { Foto } from "../pages/Foto";
import { Login } from "../pages/Login";
import { Pagamento } from "../pages/Pagamento";
import Perfil from "../pages/Perfil";
import { Register } from "../pages/Register";
import { Relatorio } from "../pages/Relatorio";
import { Reservas } from "../pages/Reservas";
import { Vagas } from "../pages/Vagas";

function Rotas() {
  return (

    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/vagas" element={<Vagas />} />
      <Route path="/reservas" element={<Reservas />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/relatorio" element={<Relatorio />} />
      <Route path="/foto" element={<Foto />} />
      <Route path="/editar/:id" element={<Editar />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  );

}

export default Rotas;