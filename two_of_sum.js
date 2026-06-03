function twoOfSum(arr, target) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (map.has(diff)) return [map.get(diff), i];
    map.set(arr[i], i);
  }
}

// in place two sum

function altTwoSum(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let sum = nums[l] + nums[r];
    if (sum === target) {
      console.log([l, r]);
      return [l, r];
    }
    sum < target ? l++ : r--;
  }
}

nums = [2, 7, 11, 15];
target = 18;

// console.log(twoOfSum(nums, target));
console.log(altTwoSum(nums, target)); // array should be sorted 
