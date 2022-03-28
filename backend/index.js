const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const socket = require('socket.io');

app.use(express.json());
app.use(cors());


const server = http.createServer(app);

server.listen('4500',()=>{
    console.log('Server is working on port 4500');
})