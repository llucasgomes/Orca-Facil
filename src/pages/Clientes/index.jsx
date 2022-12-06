import { Header } from "../../shared/components/Header";
import { ContainerClientes } from "./styled";
import { MaterialList } from "../../assets/data/data";

export const Clientes = () => {
  return (
    <>
      <Header />
      <ContainerClientes>
        <input list="materials" />
        <datalist id="materials">
          {MaterialList.map((item) =>
            item.material.map((item, index) => (
              <option value={item.material} key={index}>
                {item}
              </option>
            ))
          )}
        </datalist>
      </ContainerClientes>
    </>
  );
};
