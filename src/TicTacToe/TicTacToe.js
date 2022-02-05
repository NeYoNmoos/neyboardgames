import "./TicTacToe.css";
import * as React from "react";
import {
  Typography,
  Grid,
} from "@mui/material";
import Square from "./Square";
import Board from "./Board";

function TicTacToe() {





  return (
    <Board></Board>

    // <Grid container spacing={2} line-height="100%">
    //   <Square></Square>
  

    //   <Grid item xs={4} className="middleRowVertical">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="field">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="middleRowHorizontal">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="middle">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="middleRowHorizontal">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="field">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="middleRowVertical">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={4} className="field">
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       NeyBoardGames
    //     </Typography>
    //   </Grid>
    // </Grid>
  );
}

export default TicTacToe;
