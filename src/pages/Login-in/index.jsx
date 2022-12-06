import { Botao, Botao_LoginIn } from "../../shared/components/Botoes";
import { Input } from "../../shared/components/Input";

import { useState } from "react";
import { Container_Createlogin, Container2 } from "./styled";

export const CreateLogin = () => {
  const [hide, setHide] = useState("password");

  return (
    <Container2>
      <Container_Createlogin>
        <h1>Orça Facil</h1>
        <h2>Create Login</h2>
        <Input tipo={"email"} place={"Email"} setHide={setHide} />
        <Input tipo={hide} place={"Senha"} setHide={setHide} />
        <Input tipo={hide} place={"Confirmar Senha"} setHide={setHide} />

        <label></label>

        <Botao />
        <Botao_LoginIn />
      </Container_Createlogin>
    </Container2>
  );
};
