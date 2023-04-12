import { Container, Grid, Typography } from "@material-ui/core";
import { MainMenu } from "../common/MainMenu";
import { ExampleForm } from "../modules/samples/ExampleForm";

export const ExampleFormPage = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <MainMenu />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1">An Example Form</Typography>
      </Grid>
      <Grid item xs={12}>
        <ExampleForm />
      </Grid>
    </Container>
  );
};
