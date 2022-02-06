import * as React from "react";
import "./Square.css";
import {
    Grid,
    Typography
  } from "@mui/material";

const Square = (props) => {
    return (
      <Grid item xs={4} className="field" onClick={props.onClick}>
        <Typography className="squareValue" variant="h2" component="div">
          {props.value}
        </Typography>
      </Grid>
    );
}

export default Square;
