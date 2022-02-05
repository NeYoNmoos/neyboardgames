import "./App.css";
import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Card,
  Grid,
  TextField
} from "@mui/material";
import TicTacToe from "./TicTacToe/TicTacToe";

function App() {
  return (
    <div className="app">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NeyBoardGames
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Grid
        container
        spacing={2}
        padding={2}
        style={{ minHeight: "0vh" }}
      >
        
        <Grid item xs={12} textAlign="center">
          <h1>Tic Tac Toe</h1>
        </Grid>

        <Grid item xs={8} sm={8} md={8} 
        direction="column"
        > 
          
          <Card className="game"> 
            {/* game goes here */}
            <TicTacToe />
          </Card>
        </Grid>

        <Grid item xs={4} sm={4} md={4}>
          <Card height="100%">
            <h1>Chat goes here...</h1>

            <TextField 
              label="Chat here"
              multiline
              maxRows={4}
            />

            <Button
              variant="contained"
            >
              SEND
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
