import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { MainMenu } from "../common/MainMenu";
import { StateExample } from "../modules/samples/StateExample";
import StatefulSwitch from "../modules/samples/StatefulSwitch";

export const Home = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <MainMenu />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1">Home</Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <Typography variant="body1">
              Enim esse eu consectetur velit voluptate nostrud non irure culpa
              deserunt. Et velit occaecat nisi reprehenderit aliqua laborum
              ullamco qui et enim do. Sit consequat dolore voluptate veniam
              culpa laboris minim duis commodo exercitation labore. Et
              exercitation cillum duis qui eiusmod ut.
            </Typography>
            <Typography variant="body1">
              Laboris consequat id culpa in sit labore fugiat ea excepteur enim.
              Exercitation enim deserunt voluptate tempor aute duis proident.
              Laboris incididunt duis ullamco proident ad veniam ullamco culpa
              ipsum ut veniam do proident. Dolor fugiat sunt voluptate culpa
              velit id et aliquip nostrud minim proident elit. Ex in culpa est
              Lorem labore.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h2">Side Bar</Typography>
            <Typography>
              Id anim amet mollit amet consectetur fugiat sint quis. Aliquip
              aliqua magna duis amet culpa officia anim. Velit magna pariatur
              consequat ea. Laborum nisi Lorem voluptate non cupidatat Lorem
              commodo. Labore cupidatat non proident nostrud amet. Incididunt
              dolor elit duis sit. Ipsum occaecat esse elit consequat commodo
              nisi et nostrud esse quis et dolor minim.
            </Typography>
          </Grid>
          <Grid item>
            <StatefulSwitch />
          </Grid>
          <Grid item>
            <StateExample />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
