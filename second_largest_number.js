function secondLargeNumber(aryNum = []) {
  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let num of aryNum) {
    if (num > largest) {
      secondLarge = largest;
      largest = num;
    } else if (secondLarge < num && num !== largest) {
      secondLarge = num;
    }
  }
  return secondLarge === -Infinity ? null : secondLarge;
}

let aryNum = [10, 5, 8, 20];

console.log(secondLargeNumber(aryNum));
