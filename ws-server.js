const http = require("http");
const crypto = require("crypto");

const server_num = process.env.SERVER_NO || "1";
const WS_MAGIC_STRING = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";

const server = http.createServer((req, res) => {
  const pathParts = req.url.split('/');
  const number_m = pathParts[1] || "0";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<h1>Server ${server_num} answered: ${number_m}</h1>`);
});

// Handles the HTTP "Upgrade" request specifically — this fires instead of
// the normal request handler above, whenever a client asks to upgrade
server.on("upgrade", (req, socket) => {
  const key = req.headers["sec-websocket-key"];

  if (!key) {
    socket.end("HTTP/1.1 400 Bad Request\r\n\r\n");
    return;
  }

  const acceptKey = crypto
    .createHash("sha1")
    .update(key + WS_MAGIC_STRING)
    .digest("base64");

  const responseHeaders = [
    "HTTP/1.1 101 Switching Protocols",
    "Upgrade: websocket",
    "Connection: Upgrade",
    `Sec-WebSocket-Accept: ${acceptKey}`,
    "\r\n"
  ].join("\r\n");

  socket.write(responseHeaders);
  // Handshake complete — connection is now a raw WebSocket. We're not
  // implementing message framing here, just proving the upgrade itself.
});

server.listen(3000, () => {
  console.log(`Website running at http://localhost:3000 (Server ${server_num})`);
});