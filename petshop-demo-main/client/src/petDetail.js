import { useQuery } from "@apollo/client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BAND } from "./queries";
import Navbar from "./navbar";

export const BandDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_BAND, {
    variables: { bandId: id },
  });

  if (error) return "errorrrrr";

  if (loading) return "loading...";

  const band = data.band;
  return (
    <>
   <Navbar />
    <Grid container spacing={4} marginTop={2}>
    <Grid item xs={2}></Grid>
    <Grid item xs={3}>
        <Typography variant="h5">{band.bandname}</Typography><Typography>is a fun loving {band.bandgenre} who loves to play!</Typography>
        <br></br>
        <Typography>You can take {band.bandname} home today for ${band.ticketprice}!</Typography>
      </Grid>

      <Grid item xs={2}>
      <Box component="img" src={band.bandphoto}    sx={{
          maxHeight: { xs: 350, md: 250 },
          maxWidth: { xs: 500, md: 700 },
        }}/>
        <Typography variant="h4">{band.bandname}</Typography>
      </Grid>

    </Grid>
    
  
    </>
  );
};


