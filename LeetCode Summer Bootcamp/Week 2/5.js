// Cutting Ribbons

function maxLength(ribbons, k) {
  let left = 1;
  let right = Math.max(...ribbons);
  let answer = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    for (let ribbon of ribbons) {
      count += Math.floor(ribbon / mid);
    }
    if (count >= k) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}
