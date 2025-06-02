// Reverse String

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});
process.stdin.on("end", (_) => {
  inputString = inputString.trim().split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Function to be implemented
function reverseString(s) {
  // Write your code here
  return s.split("").reverse().join("");
}

function main() {
  const s = readLine();
  const result = reverseString(s);
  console.log(result);
}
