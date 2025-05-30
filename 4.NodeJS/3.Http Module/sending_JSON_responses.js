const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/data' && req.method === 'GET') {
    const jsonData = {
      message: 'Hello, World!',
      timestamp: new Date().toISOString(),
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(jsonData));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
