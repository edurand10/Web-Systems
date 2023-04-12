import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { MainMenu } from '../common/MainMenu';

export const Page1 = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <MainMenu />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1">Page 1</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">
          Enim esse eu consectetur velit voluptate nostrud non irure culpa deserunt. Et velit occaecat nisi reprehenderit aliqua laborum ullamco qui et enim do. Sit consequat dolore voluptate veniam culpa laboris minim duis commodo exercitation labore. Et exercitation cillum duis qui eiusmod ut.
        </Typography>
        <Typography variant='body1'>
          Laboris consequat id culpa in sit labore fugiat ea excepteur enim. Exercitation enim deserunt voluptate tempor aute duis proident. Laboris incididunt duis ullamco proident ad veniam ullamco culpa ipsum ut veniam do proident. Dolor fugiat sunt voluptate culpa velit id et aliquip nostrud minim proident elit. Ex in culpa est Lorem labore.
        </Typography>
      </Grid>
    </Container>
  );
};
