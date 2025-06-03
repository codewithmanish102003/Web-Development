// server.js
const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle socket connection
io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on('chat-message', (msg) => {
    io.emit('chat-message', msg); // Broadcast to all
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
