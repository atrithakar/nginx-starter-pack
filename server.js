const http = require("http");

const server_num = process.env.SERVER_NO

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Hello World From Server ${server_num}!</h1>`);
});

server.listen(3000, () => {
  console.log("Website running at http://localhost:3000");
});
