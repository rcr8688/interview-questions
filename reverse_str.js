let ary = ["h", "e", "l", "l", "o"];

function reverseAry(strAry = []) {
  let len = strAry.length;
  let halfStr = Math.floor(len / 2);

  for (let i = 0; i < halfStr; i++) {
    let temp = strAry[i];
    strAry[i] = strAry[len - 1 - i];
    strAry[len - 1 - i] = temp;
  }
  return strAry;
}

console.log(reverseAry(ary));
