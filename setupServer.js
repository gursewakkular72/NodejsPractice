// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello from the server"); // this is executes everytime a request hits the server.
// });

// server.listen("8000", "127.0.0.1", () => {
//   console.log("listenting to requests on port 8000");
// });

const http = require("http");
const url = require("url");
const fs = require("fs");

const rawData = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// const data_ = JSON.parse(rawData);
// console.log(data_);

const server = http.createServer((req, res) => {
  const pathname = req.url;
  // console.log(url);
  if (pathname === "/") {
    res.end("This is the home page");
  } else if (pathname === "/overview") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(rawData);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-hanlder": "hello world",
    });
    res.end("<h1>404 page not found.</h1>");
  }

  // res.end("hello from the server folks!");
});

server.listen("8000", "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
