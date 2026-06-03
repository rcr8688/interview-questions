const crypto = require('crypto');

// Greeting
console.log("Hello World");
var a = 1078698;
var b = 20986;

// --- Synchronous PBKDF2 (BLOCKING) ---
// ⚠️ This will block the main thread until completion — use sparingly!
    const key1 = crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
    console.log("First Key is Generated");

// --- Asynchronous PBKDF2 (NON-BLOCKING) ---
// ✅ Preferred for performance in server apps
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key2) => {
    if (err) {
        console.error("Error generating second key (async):", err);
        return;
    }
    console.log("Second Key is generated");
});

// --- Multiplication Function ---
// Note: Ignores parameters x, y — uses global 'a' and 'b'
function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

// Execute multiplication
var c = multiplyFn(a, b);
console.log("Multiplication result is : ", c);
