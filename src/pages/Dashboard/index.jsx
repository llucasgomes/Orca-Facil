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
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
          <Grid item xs={2}>
            <CardOrcamento />
          </Grid>
        </Grid>
      </Main>
      <Footer />
    </>
  );
};
