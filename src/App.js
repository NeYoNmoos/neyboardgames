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

function App() {
  return (
    <div>
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
        spacing={10}
        padding={10}
        style={{ minHeight: "0vh" }}
      >
        
        <Grid item xs={12}>
          <h1>Bestes Game der welt</h1>
        </Grid>

        <Grid item xs={6} sm={6} md={6} 
        direction="column"
        alignItems="center"
        justify="center"> 
          
          <Card>
            <Grid 
            container
            spacing={2}
            line-height="100%"
            >
              <Grid item xs={4} className="field">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="middleRowVertical">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="field">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="middleRowHorizontal">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="middle">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="middleRowHorizontal">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="field">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="middleRowVertical"> 
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
              <Grid item xs={4} className="field">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                NeyBoardGames
                </Typography>
              </Grid>
            </Grid>
            <h1>Fick Fack Fuck</h1>
            <h1>Fick Fack Fuck</h1>
            <h1>Fick Fack Fuck</h1>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={6}>
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
              Send
            </Button>

          </Card>
          
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
