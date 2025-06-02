// Two Sum (UnSorted Array)

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
function twoSum(nums, target) {
  // Write your code here
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let complementNumber = target - nums[i];
    if (map.hasOwnProperty(complementNumber)) {
      return [map[complementNumber], i];
    }
    map[nums[i]] = i;
  }
}

function main() {
  const n = parseInt(readLine());
  const nums = readLine().split(" ").map(Number);
  const target = parseInt(readLine());

  const result = twoSum(nums, target);
  console.log(result[0], result[1]);
}
