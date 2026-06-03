function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  // Count chars in s
  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  // Remove chars using t
  for (let char of t) {
    if (!map[char]) {
      return false;
    }

    map[char]--;
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
