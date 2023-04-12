import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { Button, Container, Grid, TextField } from "@material-ui/core";

// define our initial state for our form
const initialValues = {
  username: "",
};

// simple validation

const validationSchema = yup.object({
  username: yup.string().required().min("3").label("User Name"),
});

export const SimpleForm = () => {
  const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid item xs={12}>
          <TextField
            id="username"
            label="User Name"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.username}
            helperText={errors.username}
          />
        </Grid>
        <Grid item>
          <Button type="submit">Submit</Button>
        </Grid>
      </Container>
    </form>
  );
};
