// function isPad(str = '') {
//   if (str.length === 0) return false;
//   let n = str.length;
//   for (let i = 0; i < n; i++) {
//     if (str[i] !== str[n - 1]) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// }

// console.log(isPad(str));

// let arr = [1, [2, [3, 4]], 5];

// function isFlattenArray(arr = []) {
//   return arr.reduce(
//     (acc, curr) =>
//       acc?.concat(Array.isArray(curr) ? isFlattenArray(curr) : curr),
//     []
//   );
// }

// console.log(isFlattenArray(arr));

// let arr = [
//   { name: 'A', age: 20 },
//   { name: 'B', age: 25 },
//   { name: 'C', age: 20 },
// ];

// function isGroupBy(arr = []) {
//   let ageBygroup = {};
//   for (let item of arr) {
//     if (!ageBygroup.hasOwnProperty(item.age)) {
//       ageBygroup[item.age] = [item];
//     } else {
//       ageBygroup[item.age].push(item);
//     }
//   }
//   return ageBygroup;
// }

// console.log(isGroupBy(arr));

let arr = [0, 2, 8, 0, 1];

function moveAllZeros(arr = []) {
  let i = 0;
  for (let item of arr) {
    if (item !== 0) {
      arr[i] = item;
      i++;
    }
  }
  while (i < arr.length) {
    arr[i] = 0;
    i++;
  }
  return arr;
}
console.log(moveAllZeros(arr));

let arr1 = [1, 2, 3, 4];
let arr2 = [2, 4, 6, 8];

function intersection(a, b) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      result.push(a[i]);
      i++;
      j++;
    } else if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
}

console.log(intersection(arr1, arr2));

console.log(x);
var x = 0;
function test() {
  x = 1;
  {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
test();
console.log(x);

console.log(x);
var x = 0;
function test() {
  let x = 1;
  {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
test();
console.log(x);

let arr = [5, 2, 8, 1, 4];
function sortWithReduce(arr) {
  return arr.reduce((sorted, current) => {
    // Find correct index
    let index = sorted.findIndex((item) => current < item);

    // If no larger element found, push at end
    if (index === -1) {
      sorted.push(current);
    } else {
      sorted.splice(index, 0, current);
    }
    return sorted;
  }, []);
}
console.log(sortWithReduce(arr));

let arr = [5, 2, 8, 1, 4];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);

function fib(n) {
  let a = 0,
    b = 1;
  for (let i = 0; i < n; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
}

console.log(fib(8));
