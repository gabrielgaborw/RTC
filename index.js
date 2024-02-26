const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { createConnection } = require('typeorm');
const Message = require('./Entities/Message');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

io.on("connection", (socket) => {
  console.log("a user has connected");

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

httpServer.listen(3000, () => {
    console.log("Server listening on port 3000");
});