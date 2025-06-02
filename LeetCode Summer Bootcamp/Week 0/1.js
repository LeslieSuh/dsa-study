// Find the Index of the First Occurence in a String

"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

// Read input
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
function strStr(haystack, needle) {
  // Write your code here
  const i = haystack.length;
  const j = needle.length;
  for (let k = 0; k <= i - j; k++) {
    if (haystack.substring(k, k + j) === needle) {
      return k;
    }
  }
  return -1;
}

function main() {
  const haystack = readLine();
  const needle = readLine();

  const result = strStr(haystack, needle);
  console.log(result);
}
