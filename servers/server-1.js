const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello World From Server 1!</h1>");
});

server.listen(3000, () => {
  console.log("Website running at http://localhost:3000");
});
