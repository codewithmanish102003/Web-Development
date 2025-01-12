const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200; // Set status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set response header
  res.end('Hello, World!\n'); // End the response with some content
});

// Define the server port and host
const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
