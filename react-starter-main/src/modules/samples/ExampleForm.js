import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  address: "",
  city: "",
  state: "",
  zip: "",
};

const validationSchema = yup.object({
  address: yup.string().required().label("Street Address"),
  city: yup.string().required().label("City"),
  state: yup.string().required().label("State"),
  zip: yup.string().required().label("zip"),
});

export const ExampleForm = () => {
  const { values, errors, handleSubmit, handleBlur, handleChange, isValid } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, helpers) => {
        console.log(values, helpers);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h3">Registration</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Street Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="City"
              error={!!errors.city}
              helperText={errors.city}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="State"
              error={!!errors.state}
              helperText={errors.state}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="zip"
              value={values.zip}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Zip"
              error={!!errors.zip}
              helperText={errors.zip}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" disabled={isValid === false}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};
