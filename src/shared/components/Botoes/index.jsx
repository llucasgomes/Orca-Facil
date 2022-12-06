import { Btn_criarLogin, Btn_login } from "./styled";
import { Link } from "react-router-dom";

export const Botao = () => {
  return (
    <Btn_login>
      <Link to="/dashboard" className="link">
        Entrar
      </Link>
    </Btn_login>
  );
};

export const Botao_LoginIn = () => {
  return (
    <Btn_criarLogin>
      {" "}
      <Link to="/login-in" className="link">
        Criar Conta
      </Link>
    </Btn_criarLogin>
  );
};
