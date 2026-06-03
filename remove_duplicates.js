let arr = [1, 2, 2, 3];

// console.log([...new Set(arr)])

const arrObj = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
];

const unique = [...new Map(arrObj.map((item) => [item.id, item])).values()];

console.log(unique);

// Remove Duplicates from Sorted Array

function removeDuplicatesInplace(num) {
  let i = 0;
  for (let j = 1; j < num.length; j++) {
    if (num[i] !== num[j]) {
      i++;
      num[i] = num[j];
    }
  }
  return i + 1;
}
nums = [1, 1, 2];

console.log(removeDuplicatesInplace(nums));

// remove elements

function removeElement(nums = [], target = 0) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== target) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

let numstrgt = [3, 1, 6, 3, 3, 5, 6, 9];
let target = 3;
console.log(removeElement(numstrgt, target));
