let ary = [-10, -3, 0, 5, 9];

function binearySearch(arr = [], target) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binearySearch(ary, 9));

//  in recursive ,mode
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (target > arr[mid]) {
    return binarySearch(arr, target, mid + 1, right);
  }

  return binarySearch(arr, target, left, mid - 1);
}
