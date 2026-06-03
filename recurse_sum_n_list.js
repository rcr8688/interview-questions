function sumOfNList(n = 0) {
  if (n === 0) return 0;

  return n + sumOfNList(n - 1);
}

console.log(sumOfNList(5));

let ary = [5, 3, 8, 6, 1, 8];

function arySum(n = 0) {
  if (n === 0) return ary[n];
  return ary[n] + arySum(n - 1);
}

console.log(arySum(ary.length - 1));

// odd number

function addNum(n) {
  const isOdd = ary[n] % 2 != 0;
  if (n === 0) {
    return isOdd ? ary[n] : 0;
  }

  return (isOdd ? ary[n] : 0) + addNum(n - 1);
}

console.log(addNum(ary.length - 1));

// factorial

function factorial(n) {
  if (n === 1) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));

// is prowe Of 2

function isPowerOfTwo(n) {
  if (n === 1) {
    return true;
  } else if (n < 1 || n % 2 !== 0) {
    return false;
  }

  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(3));

function fabicinaci(n) {
  if (n <= 1) return n;
  return fabicinaci(n - 1) + fabicinaci(n - 2);
}

console.log(fabicinaci(8));
