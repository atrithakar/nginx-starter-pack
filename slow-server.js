const http = require("http");

const server_num = process.env.SERVER_NO || "1";

const server = http.createServer((req, res) => {
  // Split the URL path by slashes (e.g., "/42" becomes ["", "42"])
  const pathParts = req.url.split('/');
  const number_m = pathParts[1] || "0"; // Default to "0" if no number is provided

  // Delay the response by 20ms
  setTimeout(() => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Server ${server_num} answered: ${number_m}</h1>\n`);
  }, 200);
});

server.listen(3000, () => {
  console.log(`Website running at http://localhost:3000`);
});