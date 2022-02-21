import './App.css';
import {useState, useEffect} from 'react';
import io from 'socket.io-client';
import {nanoid} from 'nanoid'; 

const socket = io.connect("http://localhost:5000/");
const userName = nanoid(4);

function Connection() {


    
}


