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
import io from "socket.io-client"; 
import {nanoid} from "nanoid";
import { useState, useEffect } from "react";

const socket = io.connect("http://139.59.148.33:5000/");
const userName = nanoid(4); 

function App() {

  const [gameId, setGameId] = useState('');
  

  const createGame = (game) => {
    console.log("game created");
  }

  const joinGame = (e) => {
    e.preventDefault();
    console.log(gameId);
  }
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", {message, userName});
    setMessage("");
  }

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

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

        <Grid item xs={6}>
          <form onSubmit={joinGame}>
            <TextField type="text"
            placeholder="input game id" 
            value={gameId} 
            onChange={(e) => { 
              setGameId(e.target.value);
            }}
            /> 
            <Button variant="contained" type="submit">JOIN</Button>
          </form>
        </Grid>

        <Grid item xs={6}>
            <Button variant="contained" onClick={createGame}>CREATE</Button>
        </Grid>

        <Grid item xs={12} sm={8} md={8} 
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

            {chat.map((payload, index) => {
              return(
              <p key={index}> <span>id: {payload.userName}</span>: {payload.message} </p>
              )
            })}

            <form onSubmit={sendChat}>
              <TextField 
              type="text"
              placeholder="Chat here" 
              value={message} 
              onChange={(e) => { 
                setMessage(e.target.value);
              }}
              /> 
              <Button variant="contained" type="submit">JOIN</Button>
             </form>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
