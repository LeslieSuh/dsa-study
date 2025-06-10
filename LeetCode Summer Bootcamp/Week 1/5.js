// Move zero
function moveZeroes(nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }
  for (; j < nums.length; j++) {
    nums[j] = 0
  }
}
