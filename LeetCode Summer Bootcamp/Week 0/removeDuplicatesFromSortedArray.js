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
function removeDuplicates(nums) {
  // Write your code here
  let i = 1;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

function main() {
  const n = parseInt(readLine());
  const nums = readLine().split(" ").map(Number);

  const k = removeDuplicates(nums);
  console.log(k);
  console.log(nums.slice(0, k).join(" "));
}
