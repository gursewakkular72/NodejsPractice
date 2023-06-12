const fs = require("fs");

// block (synchronous code)
const text = fs.readFileSync("./txt/read-this.txt", "utf-8");
console.log(text);
console.log("file is read");

// non-blocking (asychronous code);

fs.readFile("./txt/read-this.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("file is being read in the background");

// non-blocking writing to a file.
fs.writeFile(
  "./txt/final.txt",
  "some text we want to write to final.txt file",
  (err) => {
    if (err) {
      return console.log("something went wrong");
    }
    console.log("The message was written to the file. ");
  }
);
