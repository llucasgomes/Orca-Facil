import { ContainerHeader } from "./styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <ContainerHeader>
      <h2>Orca Facil</h2>
      <div>
        <ul>
          <Link to="/dashboard" className="link">
            Home
          </Link>
          <Link to="/perfil" className="link">
            Perfil
          </Link>
          <Link to="/clientes" className="link">
            Clientes
          </Link>
        </ul>
      </div>
    </ContainerHeader>
  );
};
