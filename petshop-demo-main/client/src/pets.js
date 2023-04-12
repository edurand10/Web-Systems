import React from 'react';
import { useQuery } from "@apollo/client";
import { BandCard } from './pet-card';
import { Grid } from '@mui/material'
import Navbar from './navbar';
import { GET_BANDS } from './queries';


/**
 * Quotes Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
export const Bands = () => {
  const { loading, error, data } = useQuery(GET_BANDS);

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  console.log(data.bands);

  return (
    <>
    <Navbar />
    <Grid container spacing={2} marginTop={2}>
      {
      data.bands.map((band) => (
        <Grid item key={band.id} xs={12} md={3} >
          <BandCard  band={band}/>
          </Grid>
      ))
    }

    </Grid>
    </>
  );
};

