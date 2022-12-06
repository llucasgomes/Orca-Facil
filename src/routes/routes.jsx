import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Clientes, CreateLogin, Dashboard, Login, Perfil } from "../pages";

export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="login-in" element={<CreateLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
