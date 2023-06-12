const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from the server"); // this is executes everytime a request hits the server.
});

server.listen("8000", "127.0.0.1", () => {
  console.log("listenting to requests on port 8000");
});
