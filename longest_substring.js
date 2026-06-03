let str = "abcabcbb";

function longestSubstring(str = "") {
  let set = new Set(),
    l = 0,
    max = 0;
  for (let r = 0; r < str.length; r++) {
    while (set.has(str[r])) set.delete(str[l++]);
    set.add(str[r]);
    console.log(l, Math.max(max, r - l + 1));
    max = Math.max(max, r - l + 1);
  }
  return max;
}

console.log(longestSubstring(str));
