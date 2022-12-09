import CardOrcamento from "../../shared/components/CardOrcamento";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import SideBar from "../../shared/components/SideBar";

import { Main } from "./styled";

export const Dashboard = () => {
  return (
    <>
      <Header />
      {/* <SideBar /> */}
      <Main>
        <CardOrcamento empresa={"Farmabem"} />

        <CardOrcamento empresa={"Drogaria Araujo"} />

        <CardOrcamento empresa={"Drogaria Bom Pastor"} />

        <CardOrcamento empresa={"Multibras  Multimarcas"} />

        <CardOrcamento empresa={"Bastemps Motos"} />

        <CardOrcamento empresa={"Cia do Pé"} />

        <CardOrcamento empresa={"Di Felicia"} />

        <CardOrcamento empresa={"Mario Uchoa"} />

        <CardOrcamento empresa={"Totalplast"} />

        <CardOrcamento empresa={"Eletrolux"} />

        <CardOrcamento empresa={"Fabio - Santa Inês"} />

        <CardOrcamento empresa={"Comepi - Grande Circular"} />

        <CardOrcamento empresa={"Strip House"} />

        <CardOrcamento empresa={"Aslan Idiomas"} />

        <CardOrcamento empresa={"IEPTEC"} />
      </Main>
      {/* <Footer /> */}
    </>
  );
};
