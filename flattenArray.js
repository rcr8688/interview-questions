function flattenArray(arr) {
  return arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? flattenArray(cur) : cur);
  }, []);
}

arr = [[1, 2], [3, [4, 5]], 6];

console.log(flattenArray(arr));
