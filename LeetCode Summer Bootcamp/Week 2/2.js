// Find First and Last Position of Element in Sorted Array
function searchRange(nums, target) {
  function findStart(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        result = mid;
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }
  function findEnd(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        result = mid;
        start = mid + 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return result;
  }
  return [findStart(nums, target), findEnd(nums, target)];
}
