// 3Sum

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let inputLines = [];
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputLines = inputString.trim().split("\n");
  main();
});

function readLine() {
  return inputLines[currentLine++];
}

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

function main() {
  const n = parseInt(readLine(), 10);
  const nums = readLine().split(" ").map(Number);

  const res = threeSum(nums);

  for (const triplet of res) {
    console.log(triplet[0] + " " + triplet[1] + " " + triplet[2]);
  }
}
