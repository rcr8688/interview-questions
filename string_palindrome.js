// using two pointers

function isPalindrome(str) {
  // if we need to ignore the spaces and cases
  // str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("abbc"));
