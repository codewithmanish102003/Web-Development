// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  socket.on('sendLocation', (data) => {
    console.log('Location received:', data);
    io.emit('locationUpdate', data); // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

server.listen(4000, () => console.log('Server running on port 4000'));
