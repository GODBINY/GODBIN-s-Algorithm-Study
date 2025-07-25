function lowerBound(arr, target, start, end) {
  while (start < end) { // 이 말은, start랑 end랑 같아지면 return해버리겠다는거지
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid; // 찾았지만 최대한 바짝 더 땡겨서 찾아보기
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
console.log(countByRange(arr, 4, 4));
console.log(countByRange(arr, -1, 3));
