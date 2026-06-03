let ary = [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1];

function maxOnes(ary = []) {
  let maxCout = 0;
  let currentCount = 0;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i] !== 0) {
      currentCount++;
    } else {
      if (currentCount > maxCout) {
        maxCout = currentCount;
      }
      currentCount = 0;
    }
  }
  return maxCout > currentCount ? maxCout : currentCount;
}

console.log(maxOnes(ary));
