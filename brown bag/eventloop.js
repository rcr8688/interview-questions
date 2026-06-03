const fs = require('fs');
const a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

setTimeout(() => {
    console.log("Timer expired");
}, 0);

fs.readFile('./file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Reading CB");
});

function printA() {
    console.log("a=", a);
}

printA();

console.log("last line of the file.");

process.nextTick(() => {
    console.log("process.nextTick executed!");
});