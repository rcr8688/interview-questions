const crypto = require('crypto');

console.log("Hello World");

var a = 1078698;
var b = 20986;

// --- Async Function: PBKDF2 (Password-Based Key Derivation) ---
// Generates a cryptographic key from password + salt
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    if (err) {
        console.error("Error generating key:", err);
        return;
    }
    console.log("Second Key is generated");
    console.log("Generated Key (hex):", key.toString('hex'));
});

// --- Function: Multiply two numbers ---
// Note: Currently ignores parameters x, y and uses global 'a', 'b'
function multiplyFn(x, y) {
    const result = a * b; // Uses global variables
    return result;
}

// --- Execute multiplication ---
var c = multiplyFn(a, b); // Passing a, b — though function doesn't use them
console.log("Multiplication result is : ", c);
