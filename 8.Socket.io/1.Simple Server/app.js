const express=require('express')
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route handler for the root path
app.get('/', (req, res) => {
  res.send("<h1>Hello From socket.io</h1>");
});

io.on('connection', (socket) => {
  console.log('Connected:', socket.id);
  
  socket.on('message', (data) => {
    console.log('Message:', data);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});