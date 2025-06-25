// server/index.js
const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
  }
});

app.use(cors())

io.on('connection', socket => {
  console.log(`🔌 New client: ${socket.id}`);

  socket.on('send_message', data => {
    // Broadcast the message to all connected clients
    io.emit('receive_message', data);
  });

  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

server.listen(3000, () => console.log('✅ Server running on port 3000'));
