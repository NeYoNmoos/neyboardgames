import * as React from "react";
import {
    Typography,
    Grid,
    Button
  } from "@mui/material";

const Square = (props) => {
    return (
      <Grid item xs={4} className="field">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button onClick={props.onClick}>
                {props.value}
            </Button>
        </Typography>
      </Grid>
    );
}

export default Square;
