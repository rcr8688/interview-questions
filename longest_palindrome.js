function longestPalindrome(s = "") {
  let res = "";

  let count = 0;

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }

    return s.slice(l + 1, r);
  }

  for (let i = 0; i < s.length; i++) {
    let odd = expand(i, i);
    let even = expand(i, i + 1);
    let longer = odd.length > even.length ? odd : even;
    if (longer.length > res.length) res = longer;
  }
  // return res;
  return count;
}

console.log(longestPalindrome("babad"));
