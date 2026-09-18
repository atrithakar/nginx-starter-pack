const http = require("http");

const server_num = process.env.SERVER_NO;

const server = http.createServer((req, res) => {
  // Check if the request is for the root route '/'
  if (req.url === "/") {
    // Delay for 30 seconds (30,000 milliseconds)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Hello World From Server ${server_num}!</h1><p>Host header received: ${req.headers.host}</p>`);
  } else {
    // Handle other routes or return a 404
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`Request URL Received: ${req.url}`);
  }
});

server.listen(3000, () => {
  console.log("Website running at http://localhost:3000");
});