import { Grid, Switch } from "@material-ui/core";
import React, { useState } from "react";

export default function StatefulSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <label>Stateful Switch</label>
        <Switch
          id="aSwitch"
          checked={switchOn}
          onChange={() => setSwitchOn(!switchOn)}
        />
        {switchOn && <p>The switch is on!</p>}
      </Grid>
    </Grid>
  );
}
