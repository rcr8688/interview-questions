let ary = [4, 0, 2, 1, 5];

function missingNumber(ary = []) {
  let sum = 0;
  let n = ary.length;
  for (let i = 0; i < ary.length; i++) {
    sum += ary[i];
  }
  let finalCount = (n * (n + 1)) / 2;
  return finalCount - sum;
}

console.log(missingNumber(ary));
