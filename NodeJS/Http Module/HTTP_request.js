const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Method: ${req.method}`);
  console.log(`URL: ${req.url}`);
  console.log(`Headers: ${JSON.stringify(req.headers)}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.method === 'POST') {
  res.end('Received a POST request');
} else {
  res.end('Hello from GET request');
}

});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
