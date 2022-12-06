import { Botao, Botao_LoginIn } from "../../shared/components/Botoes";
import { Input } from "../../shared/components/Input";
import { Container, Container_login } from "./styled";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [hide, setHide] = useState("password");

  return (
    <Container>
      <Container_login>
        <h1>Orça Facil</h1>
        <h2>Login</h2>
        <Input tipo={"email"} place={"Email"} setHide={setHide} />
        <Input tipo={hide} place={"Senha"} setHide={setHide} />

        <label>
          <input type="checkbox" />
          Me mantenha conectado
        </label>

        <Botao />
        <Botao_LoginIn />
      </Container_login>
    </Container>
  );
};
