function moveZeros(arr) {
  let idx = 0;
  for (let num of arr) {
    if (num !== 0) arr[idx++] = num;
  }
  while (idx < arr.length) {
    arr[idx] = 0;
    idx++
  }
  return arr;
}

let nums = [0, 1, 0, 3, 12];

console.log(moveZeros(nums));
