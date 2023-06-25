// console.log("hello world");
const fs = require("fs");

setTimeout(() => console.log("Timer 0 finished"), 0);

setImmediate(() => console.log("Immediate 1 finished"));

console.log("This top level code, executed first"); // the top level code is executed first.

fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log("File has been read");
    console.log("------------------------------");
    setTimeout(() => console.log("timer 1 has finished"), 1000);
    setTimeout(() => console.log("timer 2 has finished"), 2000);
    setImmediate(() => console.log("Immediate 2 finished"));
    process.nextTick(() => console.log("process next tick finished"));
  } else console.log("something went wrong");
});
