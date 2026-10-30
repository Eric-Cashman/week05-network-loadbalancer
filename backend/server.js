'use strict';

const http = require('http');
const os = require('os');

const PORT = 3000;
const SERVER_ID = os.hostname();

const server = http.createServer((req, res) => {
  const headers = {
    'Content-Type': 'application/json',
    'X-Served-By': SERVER_ID,
  };

  if (req.url === '/healthz') {
    res.writeHead(200, headers);
    return res.end(JSON.stringify({ status: 'ok', server: SERVER_ID }));
  }

  res.writeHead(200, headers);
  res.end(
    JSON.stringify({
      message: 'Hello from the backend',
      server: SERVER_ID,
      time: new Date().toISOString(),
    })
  );
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend ${SERVER_ID} listening on port ${PORT}`);
});