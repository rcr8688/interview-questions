// Simple console log
console.log("Hello world");

// Define variables
var a = 107;
var b = 20;


const https = require("https");
const fs = require("fs");

https.get("https://dummyjson.com/products/1", (res) => {
  console.log("fetched data success");
});

setTimeout(() => {
  console.log("setTimeout called after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file asynchronously:", err);
    return;
  }
  console.log("File Data : ", data);
});

function multiplyFn(x, y) {
  const result = x * y; 
  return result;
}

// Example usage of multiplyFn
console.log("Result of multiplyFn:", multiplyFn(a, b)); // Output: 2140
