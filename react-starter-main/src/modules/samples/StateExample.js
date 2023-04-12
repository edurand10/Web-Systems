import { Button, Grid } from "@material-ui/core";
import { useState } from "react";

export const StateExample = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Button onClick={() => setClickCount(clickCount + 1)}>Click Me!</Button>
      </Grid>
      <Grid item xs={12}>
        Click Count: {clickCount}
      </Grid>
    </Grid>
  );
};
