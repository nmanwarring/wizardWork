const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("This is Nate's Server.  Deal with it!!");
});

server.listen(port, hostname, () => {
  console.log(`Server runnning at http://${hostname}:${port}/`);
});
