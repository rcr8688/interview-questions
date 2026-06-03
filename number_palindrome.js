function numberPalindrome(num) {
  if (num < 0) return 0;
  let orginalNum = num,
    reversed = 0;

  while (num > 0) {
    console.log(num, "num");
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return orginalNum === reversed;
}

console.log(numberPalindrome(121));
console.log(numberPalindrome(123));
