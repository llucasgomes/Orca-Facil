import CardOrcamento from "../../shared/components/CardOrcamento";
import { Footer } from "../../shared/components/Footer";
import { Header } from "../../shared/components/Header";
import { Main } from "./styled";

import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Farmabem"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Drogaria Araujo"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Drogaria Bom Pastor"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Multibras  Multimarcas"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Bastemps Motos"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Cia do Pé"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Di Felicia"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Mario Uchoa"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Totalplast"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Eletrolux"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Fabio - Santa Inês"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Comepi - Grande Circular"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Strip House"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"Aslan Idiomas"} />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento empresa={"IEPTEC"} />
          </Grid>
        </Grid>
      </Main>
      {/* <Footer /> */}
    </>
  );
};
