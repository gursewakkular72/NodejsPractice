const EventEmitter = require("events");
const http = require("http");

class SomeClass extends EventEmitter {
  constructor() {
    super();
  }
}
const myEmitter = new SomeClass();

myEmitter.on("someEvent", () => {
  console.log("someEvent event has occurred");
});

myEmitter.on("someOtherEvent", () => {
  console.log("some other event has occurred");
});

myEmitter.on("someOtherOtherEvent", (someVal) => {
  console.log(
    `some other other event has occurred, but this time we have passed a ${someVal} to that event.`
  );
});

myEmitter.emit("someEvent"); // will only print "someEvent event has occurred"
myEmitter.emit("someOtherEvent"); //   will only print "some other event has occurred"
myEmitter.emit("someOtherOtherEvent", 9); // will only print: "some other other event has occurred, but this time we have passed a 9 to that event".

// console.log("this runs");

/////////////////////////////****************************************************/

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("request received");
  res.end("request received");
});

server.on("request", (req, res) => {
  console.log("another request received");
});

server.on("close", () => {
  console.log("server closed");
  //   res.end("server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});

// const server = http.createServer();

// server.on("request", (req, res) => {
//   console.log("Request received!");
//   console.log(req.url);
//   res.end("Request received");
// });

// server.on("request", (req, res) => {
//   console.log("Another request 😀");
// });

// server.on("close", () => {
//   console.log("Server closed");
// });

// server.listen(8000, "127.0.0.1", () => {
//   console.log("Waiting for requests...");
// });
