let ary = [3, 1, 5, 4, 1, 5, 3];

function missingNumber(ary = []) {
  const hash = {};
  for (let i = 0; i < ary.length; i++) {
    if (!hash[ary[i]]) {
      hash[ary[i]] = 1;
    } else {
      ++hash[ary[i]];
    }
  }
  for (let item in hash) {
    if (hash[item] === 1) return item;
  }
}

console.log(missingNumber(ary));

//  if we a (xor ^) 0 = a   a(xor ^) a = 0

function findsingleValue(ary = []) {
  let xor = 0;
  for (let i = 0; i < ary.length; i++) {
    xor ^= ary[i];
  }
  return xor;
}

console.log(findsingleValue(ary));
