import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

function Rotas() {
  return (

    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>

  );

}

export default Rotas;