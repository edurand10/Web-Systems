import React, { useState } from 'react'
import { ADD_BAND } from './mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import { Button, Grid, TextField } from '@mui/material';
import { GET_BANDS } from './queries';

export const AddBand = () => {
  const navigate = useNavigate();

  const [bandInput, setBandInput] = useState({
    bandname: "",
    bandphoto: "",
    ticketprice: 0,
    bandgenre: ""
  })

  const [addBand, result] = useMutation(ADD_BAND, {
    variables: {
      input: {
        ...bandInput
      },
      refetchQueries: [
        { query: GET_BANDS }, 'bands'
      ]
    },
    errorPolicy: "all",
    onCompleted: (data) => {
      console.log(data);
      navigate("/", { state: { success: data.success } });
    },
  });

  return (
    <>
      <Navbar />
      <Grid container marginTop={2} direction="column" >
        <Grid item>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(bandInput);
            addBand()
            console.log(result);
          }}
        >
          <TextField
            name="bandname"
            label="band name"
            type="text"
            onChange={e => (setBandInput({ ...bandInput, bandname: e.target.value }))} />
          <TextField
            name="bandgenre"
            label="band genre"
            type="text"
            onChange={e => (setBandInput({ ...bandInput, bandgenre: e.target.value }))} />
          <TextField
            name="ticketprice"
            label="ticket price"
            type="text"
            onChange={e => (setBandInput({ ...bandInput, ticketprice: parseFloat(e.target.value) }))} />
          <TextField
            name="bandphoto"
            label="band image url"
            type="text"
            onChange={e => (setBandInput({ ...bandInput, bandphoto: e.target.value }))} />

          <Button type="submit" variant="outlined">Add this band!</Button>

        </form>
        </Grid>

      </Grid>
    </>
  )


}
