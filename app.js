// app.js
// Simple JavaScript program for Git practice

// Function to say hello
function sayHello(name) {
    return `Hello, ${name}! Welcome to my Git repo.`;
}

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function to simulate DevOps logging
function logMessage(message) {
    let timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
}

// Run sample functions
console.log(sayHello("Mani"));
console.log("Sum of 5 and 10:", addNumbers(5, 10));
logMessage("This is a Git practice commit!");

