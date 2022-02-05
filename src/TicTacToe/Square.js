import * as React from "react";
import {
    Grid,
    Button
  } from "@mui/material";

const Square = (props) => {
    return (
      <Grid item xs={4} className="field">

            <Button className="SquareButton" onClick={props.onClick}>
                {props.value}
            </Button>

      </Grid>
    );
}

export default Square;
