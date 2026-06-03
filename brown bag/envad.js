const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("Timer expired");
}, 0);

Promise.resolve("promise").then(console.log);

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  console.log("File reading CB");

});

process.nextTick(() => {
  console.log("Porcess.nextTick");
});

console.log("Last line of the file.");


// Last line of the file.
//Porcess.nextTick
//promise
//Timer expired
//File reading CB
//setImmediate