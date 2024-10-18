import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import { Editar } from "../pages/Editar";
import { Foto } from "../pages/Foto";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Nav } from "../pages/PaginaInicial";
import Perfil from "../pages/Perfil";
import { Register } from "../pages/Register";

function Rotas() {
  return (

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/paginainicial" element={<Nav />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/foto" element={<Foto />} />
      <Route path="/editar/:id" element={<Editar />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  );

}

export default Rotas;