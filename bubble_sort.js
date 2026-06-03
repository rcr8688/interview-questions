let arr = [5, 4, 9, 1, 0];

function bubbleSort(nums = []) {
  let n = nums.length - 1;
  for (let i = 0; i < n; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true
      }
    }
    if(!isSwapped) break;
  }
  return nums
}

console.log(bubbleSort(arr));
